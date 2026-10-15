import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({ changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-project-component',
  imports: [TranslateModule],
  templateUrl: './project-component.html',
  styleUrl: './project-component.css',
})
export class ProjectComponent {

}
