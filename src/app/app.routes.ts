import { Routes } from '@angular/router';
import { HomePage } from './component/home-page/home-page';
import { AboutComponent } from './component/about-component/about-component';
import { EducationComponent } from './component/education-component/education-component';
import { ProjectComponent } from './component/project-component/project-component';
import { Contact } from './component/contact/contact';

export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomePage},
    {path:'about',component:AboutComponent},
    {path:'experience',component:EducationComponent},
    {path:'projects',component:ProjectComponent},
    {path:'contact',component:Contact},
];
