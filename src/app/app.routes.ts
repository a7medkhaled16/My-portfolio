import { Routes } from '@angular/router';
import { HomePage } from './component/home-page/home-page';
export const routes: Routes = [
  { path: '', component: HomePage },
  ...['home', 'about', 'experience', 'projects', 'contact'].map(section => ({ path: section, redirectTo: () => '/#' + section, pathMatch: 'full' as const })),
  { path: '**', redirectTo: '' }
];
