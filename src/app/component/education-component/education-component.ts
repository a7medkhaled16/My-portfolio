import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({ changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-education-component',
  imports: [TranslateModule],
  templateUrl: './education-component.html',
  styleUrl: './education-component.css',
})
export class EducationComponent {

}
