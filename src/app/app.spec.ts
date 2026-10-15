import { APP_INITIALIZER } from '@angular/core';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { appConfig } from './app.config';
import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { Translate } from './services/translate-service';
import { ThemeService } from './services/toggle-dark';
import { App } from './app';
import { routes } from './app.routes';

describe('Portfolio navigation', () => {
 beforeEach(async () => {
  await TestBed.configureTestingModule({ imports: [App, TranslateModule.forRoot()], providers: [provideRouter(routes)] }).compileComponents();
 });
 it('renders every section on the root URL with matching navigation fragments', async () => {
  const fixture = TestBed.createComponent(App);
  await TestBed.inject(Router).navigateByUrl('/');
  fixture.detectChanges();
  await fixture.whenStable();
  fixture.detectChanges();
  for (const section of ['home', 'about', 'experience', 'projects', 'contact']) {
   expect(fixture.nativeElement.querySelector('main section#' + section)).toBeTruthy();
   expect(fixture.nativeElement.querySelector('nav a[href="/#' + section + '"]')).toBeTruthy();
  }
 });
 it('closes the mobile menu after selecting a section', async () => {
  const fixture = TestBed.createComponent(App);
  await TestBed.inject(Router).navigateByUrl('/');
  fixture.detectChanges();
  fixture.nativeElement.querySelector('.menu-button').click();
  fixture.detectChanges();
  expect(fixture.nativeElement.querySelector('.nav-links.is-open')).toBeTruthy();
  fixture.nativeElement.querySelector('nav a[href="/#contact"]').click();
  fixture.detectChanges();
  await fixture.whenStable();
  expect(fixture.nativeElement.querySelector('.nav-links.is-open')).toBeNull();
  expect(TestBed.inject(Router).url).toBe('/#contact');
 });
 it('supports both language directions and both themes', () => {
  const translation = TestBed.inject(Translate);
  const theme = TestBed.inject(ThemeService);
  const savedLanguage = localStorage.getItem('lang');
  const savedTheme = localStorage.getItem('theme');
  const initialDark = theme.isDarkMode();
  try {
   translation.changeLang('ar');
   expect(document.documentElement.dir).toBe('rtl');
   expect(document.documentElement.lang).toBe('ar');
   translation.changeLang('en');
   expect(document.documentElement.dir).toBe('ltr');
   theme.toggleTheme();
   expect(document.documentElement.classList.contains('dark')).toBe(!initialDark);
   theme.toggleTheme();
   expect(document.documentElement.classList.contains('dark')).toBe(initialDark);
  } finally {
   translation.changeLang(savedLanguage || 'en');
   if (savedLanguage === null) localStorage.removeItem('lang');
   if (savedTheme === null) localStorage.removeItem('theme');
  }
 });
 it('redirects every legacy page to its section', async () => {
  const router = TestBed.inject(Router);
  for (const section of ['home', 'about', 'experience', 'projects', 'contact']) {
   await router.navigateByUrl('/' + section);
   expect(router.url).toBe('/#' + section);
  }
 });
});

describe('Initial localization', () => {
 it('waits for translations before completing initialization', async () => {
  const previous = localStorage.getItem('lang');
  localStorage.setItem('lang', 'en');
  try {
   TestBed.configureTestingModule({ providers: [...appConfig.providers, provideHttpClientTesting()] });
   let ready = false;
   const pending = TestBed.runInInjectionContext(() => Promise.all(TestBed.inject(APP_INITIALIZER).map(initialize => initialize())));
   pending.then(() => ready = true);
   await Promise.resolve();
   expect(ready).toBeFalse();
   const http = TestBed.inject(HttpTestingController);
   http.expectOne('/i18n/en.json').flush({ home: { name: 'Ahmed Khaled' } });
   await pending;
   expect(ready).toBeTrue();
   http.verify();
  } finally {
   if (previous === null) localStorage.removeItem('lang');
   else localStorage.setItem('lang', previous);
  }
 });
});
