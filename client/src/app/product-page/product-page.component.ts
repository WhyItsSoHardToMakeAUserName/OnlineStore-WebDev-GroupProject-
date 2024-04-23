import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { ShopFeedComponent } from '../shop-feed/shop-feed.component';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [NavBarComponent,ShopFeedComponent,FontAwesomeModule],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent {
  faCircleUser = faCircleUser;
}
