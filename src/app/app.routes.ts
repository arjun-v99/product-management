import { Routes } from '@angular/router';
import { App } from './app';

export const routes: Routes = [
  {
    path: 'products',
    loadChildren: () => import('./products/products.routes').then((m) => m.PRODUCT_ROUTES),
  },
];
