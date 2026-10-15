import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
@Component({ changeDetection: ChangeDetectionStrategy.OnPush, selector: 'app-about-component', imports: [TranslateModule], templateUrl: './about-component.html', styleUrl: './about-component.css' })
export class AboutComponent {}
