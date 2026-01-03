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
        style({ opacity: 0, transform: 'translateX(-100px)' }),
        animate('1s ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ]),
    trigger('slideInRight', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(100px)' }),
        animate('1s ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ]),
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1.5s ease-in', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class HomePage {

 displayText = '';
  jobTitles = ['Frontend Developer', 'Angular Developer'];
  currentIndex = 0;
  isDeleting = false;

  ngOnInit() {
    this.typeWriter();
  }

  typeWriter() {
    const current = this.jobTitles[this.currentIndex];
    
    if (this.isDeleting) {
      this.displayText = current.substring(0, this.displayText.length - 1);
    } else {
      this.displayText = current.substring(0, this.displayText.length + 1);
    }

    let typeSpeed = this.isDeleting ? 50 : 150;

    if (!this.isDeleting && this.displayText === current) {
      typeSpeed = 2000;
      this.isDeleting = true;
    } else if (this.isDeleting && this.displayText === '') {
      this.isDeleting = false;
      this.currentIndex = (this.currentIndex + 1) % this.jobTitles.length;
    }

    setTimeout(() => this.typeWriter(), typeSpeed);
  }
}
