import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { ToggelComponent } from "../toggel-component/toggel-component";
import { Translate } from '../../services/translate-service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar-component',
  imports: [RouterLink, RouterLinkActive, ToggelComponent,TranslateModule],
  templateUrl: './navbar-component.html',
  styleUrl: './navbar-component.css',
})
export class NavbarComponent {
private readonly translateservice = inject(Translate)
  
lang = localStorage.getItem('lang') || 'en';


selectlang(lang:string){
  this.translateservice.changeLang(lang)
  this.lang=lang
}
}
