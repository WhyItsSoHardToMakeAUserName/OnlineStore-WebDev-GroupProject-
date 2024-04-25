import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ShoppingCartPageComponent } from './shopping-cart-page/shopping-cart-page.component';

export const routes: Routes = [
    {path: '',component: MainPageComponent},
    {path:'test',component:ProductPageComponent},
    {path:'cart',component:ShoppingCartPageComponent}
];
