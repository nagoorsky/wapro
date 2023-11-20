import { Routes } from '@angular/router';
import { ProductDetailsComponent, ProductListComponent } from './components';

export const routes: Routes = [
  {
    path: '',
    component: ProductListComponent,
  },
  {
    path: 'product/:id',
    component: ProductDetailsComponent,
  },
];
