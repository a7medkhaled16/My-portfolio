import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

interface ExperienceItem {
  titleKey: string;
  companyKey: string;
  periodKey?: string;
  typeKey?: string;
  locationKey?: string;
  descKeys: string[];
  badges: string[];
  isCurrent?: boolean;
  isCompleted?: boolean;
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-education-component',
  imports: [TranslateModule],
  templateUrl: './education-component.html',
  styleUrl: './education-component.css',
})
export class EducationComponent {
  readonly workExperience: ExperienceItem[] = [
    {
      titleKey: 'experience.work_1_title',
      companyKey: 'experience.work_1_company',
      periodKey: 'experience.work_1_period',
      typeKey: 'experience.work_1_type',
      locationKey: 'experience.work_1_location',
      descKeys: [
        'experience.work_1_desc_1',
        'experience.work_1_desc_2',
        'experience.work_1_desc_3',
      ],
      badges: ['Angular 20', 'TypeScript', 'REST APIs', 'Tailwind CSS', 'Git'],
      isCurrent: true,
    },
    {
      titleKey: 'experience.work_2_title',
      companyKey: 'experience.work_2_company',
      periodKey: 'experience.work_2_period',
      typeKey: 'experience.work_2_type',
      locationKey: 'experience.work_2_location',
      descKeys: [
        'experience.work_2_desc_1',
        'experience.work_2_desc_2',
        'experience.work_2_desc_3',
      ],
      badges: ['Angular', 'TypeScript', 'HTML5', 'CSS3', 'Git'],
    },
  ];

  readonly training: ExperienceItem[] = [
    {
      titleKey: 'experience.training_1_title',
      companyKey: 'experience.training_1_company',
      periodKey: 'experience.training_1_period',
      descKeys: [
        'experience.training_1_desc_1',
        'experience.training_1_desc_2',
        'experience.training_1_desc_3',
      ],
      badges: [
        'Angular',
        'Change Detection',
        'Signals',
        'Clean Architecture',
        'SOLID',
        'Design Patterns',
        'NgRx',
        'NgRx Signals',
        'Module Federation',
        'Angular Libraries',
      ],
      isCompleted: true,
    },
    {
      titleKey: 'experience.training_2_title',
      companyKey: 'experience.training_2_company',
      descKeys: [
        'experience.training_2_desc_1',
        'experience.training_2_desc_2',
      ],
      badges: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Angular', 'Bootstrap'],
    },
    {
      titleKey: 'experience.training_3_title',
      companyKey: 'experience.training_3_company',
      descKeys: [
        'experience.training_3_desc_1',
      ],
      badges: ['TypeScript', 'Angular', 'Bootstrap', 'Node.js', 'MongoDB', 'Express'],
    },
    {
      titleKey: 'experience.training_4_title',
      companyKey: 'experience.training_4_company',
      descKeys: [
        'experience.training_4_desc_1',
      ],
      badges: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'TypeScript', 'Angular', 'Tailwind'],
    },
  ];
}
