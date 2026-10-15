import { AfterViewInit, Component, OnDestroy, NgZone, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ToggelComponent } from '../toggel-component/toggel-component';
import { Translate } from '../../services/translate-service';
import { TranslateModule } from '@ngx-translate/core';
import { NavigationService } from '../../services/navigation-service';
@Component({ changeDetection: ChangeDetectionStrategy.OnPush, selector: 'app-navbar-component', imports: [RouterLink, ToggelComponent, TranslateModule], templateUrl: './navbar-component.html', styleUrl: './navbar-component.css' })
export class NavbarComponent implements AfterViewInit, OnDestroy {
  private readonly translation = inject(Translate);
  private readonly viewportScroller = inject(ViewportScroller);
  readonly navigation = inject(NavigationService);
  readonly sections = ['home', 'about', 'experience', 'projects', 'contact'];
  readonly menuOpen = signal(false);
  lang = this.translation.defaultLang;
  private readonly zone = inject(NgZone);
  private observer?: ResizeObserver;
  ngAfterViewInit() {
    const bar = document.querySelector<HTMLElement>('.nav-bar');
    if (bar) {
      this.viewportScroller.setOffset(() => [0, bar.offsetHeight + 24]);
      this.zone.runOutsideAngular(() => {
      this.observer = new ResizeObserver(() => document.documentElement.style.setProperty('--nav-height', bar.offsetHeight + 'px'));
      this.observer.observe(bar);
      });
    }
  }
  selectlang(lang: string) { this.translation.changeLang(lang); this.lang = lang; }
  ngOnDestroy() { this.observer?.disconnect(); }
}
