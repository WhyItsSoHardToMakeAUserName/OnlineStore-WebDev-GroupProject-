import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ProductPageComponent } from './product-page/product-page.component';

export const routes: Routes = [
    {path: '',component: MainPageComponent},
    {path:'test',component:ProductPageComponent}
];
