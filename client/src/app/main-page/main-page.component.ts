import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit, Pipe, PipeTransform } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { ShopFeedComponent } from '../shop-feed/shop-feed.component';
@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule,NavBarComponent,ShopFeedComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

}