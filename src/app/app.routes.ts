import { Routes } from '@angular/router';
import { ProductDetailsComponent, ProductListComponent } from './components';

export const routes: Routes = [
  {
    path: '',
    component: ProductListComponent,
    title: 'Lista produktów | Wapro',
  },
  {
    path: 'product/:id',
    component: ProductDetailsComponent,
  },
];
