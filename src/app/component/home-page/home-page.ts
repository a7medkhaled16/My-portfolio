import { AfterViewInit, Component, OnDestroy, NgZone, inject, ChangeDetectionStrategy } from '@angular/core';
import { AboutComponent } from '../about-component/about-component';
import { EducationComponent } from '../education-component/education-component';
import { ProjectComponent } from '../project-component/project-component';
import { Contact } from '../contact/contact';
import { TranslateModule } from '@ngx-translate/core';
import { NavigationService } from '../../services/navigation-service';
@Component({ changeDetection: ChangeDetectionStrategy.OnPush, selector: 'app-home-page', imports: [AboutComponent, EducationComponent, ProjectComponent, Contact, TranslateModule], templateUrl: './home-page.html', styleUrl: './home-page.css' })
export class HomePage implements AfterViewInit, OnDestroy {
 private readonly navigation = inject(NavigationService);
 private readonly zone = inject(NgZone);
 private heroObserver?: IntersectionObserver;
 private readonly visibilityChanged = () => document.documentElement.classList.toggle('page-hidden', document.hidden);
 private observer?: IntersectionObserver;
 private revealObserver?: IntersectionObserver;
 ngAfterViewInit() {
  this.zone.runOutsideAngular(() => {
  document.addEventListener('visibilitychange', this.visibilityChanged);
  this.visibilityChanged();
  const hero = document.querySelector('.hero');
  this.heroObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => entry.target.classList.toggle('hero-motion-paused', !entry.isIntersecting));
  });
  if (hero) this.heroObserver.observe(hero);
  const sections = Array.from(document.querySelectorAll<HTMLElement>('main section[id]'));
  const visible = new Set<Element>();
  this.observer = new IntersectionObserver(entries => {
   entries.forEach(entry => entry.isIntersecting ? visible.add(entry.target) : visible.delete(entry.target));
   let current: HTMLElement | undefined;
   let closest = Infinity;
   for (const section of sections) {
     if (!visible.has(section)) continue;
     const distance = Math.abs(section.getBoundingClientRect().top - 100);
     if (distance < closest) { current = section; closest = distance; }
   }
   if (current && this.navigation.activeSection() !== current.id) this.zone.run(() => this.navigation.activeSection.set(current!.id));
  }, { rootMargin: '-15% 0px -50% 0px', threshold: 0 });
  sections.forEach(section => this.observer?.observe(section));
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
   this.revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('revealed'); this.revealObserver?.unobserve(entry.target); }
   }), { threshold: .08 });
   document.querySelectorAll<HTMLElement>('.reveal').forEach(element => {
    if (element.getBoundingClientRect().top >= window.innerHeight) { element.classList.add('reveal-pending'); this.revealObserver?.observe(element); }
   });
  }
  });
 }
 ngOnDestroy() { this.observer?.disconnect(); this.revealObserver?.disconnect(); this.heroObserver?.disconnect(); document.removeEventListener('visibilitychange', this.visibilityChanged); document.documentElement.classList.remove('page-hidden'); }
}
