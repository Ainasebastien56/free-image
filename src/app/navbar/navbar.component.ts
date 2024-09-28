import { Component } from '@angular/core';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isOpenMenu : boolean = false;
  faBars = faBars;
  faXmark = faXmark;

  toggleMenu(){
    this.isOpenMenu = !this.isOpenMenu;
  }

}
