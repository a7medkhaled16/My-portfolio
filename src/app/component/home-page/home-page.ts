import { Component } from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition
} from '@angular/animations';
import { AboutComponent } from "../about-component/about-component";
import { EducationComponent } from "../education-component/education-component";
import { ProjectComponent } from "../project-component/project-component";
import { Contact } from "../contact/contact";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home-page',
  imports: [AboutComponent, EducationComponent, ProjectComponent, Contact,TranslateModule],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
    animations: [
    trigger('slideInLeft', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-300px)' }),
        animate('1s ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ]),
    trigger('slideInRight', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(300px)' }),
        animate('1s ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class HomePage {

}
