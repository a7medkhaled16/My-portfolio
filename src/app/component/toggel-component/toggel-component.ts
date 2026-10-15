import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { ThemeService } from '../../services/toggle-dark';

@Component({ changeDetection: ChangeDetectionStrategy.OnPush,
   selector: 'app-toggel-component',
  standalone:true,
  imports: [],
  templateUrl: './toggel-component.html',
  styleUrls: ['./toggel-component.css']
})
export class ToggelComponent {
;
 themeService = inject(ThemeService);

  toggle(): void {
    this.themeService.toggleTheme();
  }
}
