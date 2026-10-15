import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({ changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-contact',
  imports: [TranslateModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

}
