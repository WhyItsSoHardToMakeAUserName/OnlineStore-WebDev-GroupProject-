import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleXmark, faCartShopping,faCircleUser,faBell,faChevronDown,faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  constructor(private router: Router ){}

RedirectToMain() {
  this.router.navigate(['/']);
}
  faCircleXmark  = faCircleXmark;
  faCartShooping = faCartShopping;
  faCircleUser = faCircleUser;
  faBell = faBell;
  faChevronDown = faChevronDown;
  faMagnifyingGlass = faMagnifyingGlass;
}
