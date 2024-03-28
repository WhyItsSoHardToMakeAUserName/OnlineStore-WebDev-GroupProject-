import { Component } from '@angular/core';
import { WelcomePageComponent } from '../welcome-page/welcome-page.component';
import { CommonModule } from '@angular/common';
import { productList } from '../../assets/products/products';
@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule,WelcomePageComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  products = productList;
  categories = Array.from(new Set(productList.map(product=>product.category)))
  constructor(){
    console.log(this.categories);
  }
}
