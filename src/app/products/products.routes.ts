// products.routes.ts
import { Routes } from '@angular/router';
import { ProductList } from './product-list/product-list';
import { ProductDetail } from './product-detail/product-detail';
import { AddProduct } from './add-product/add-product';

export const PRODUCT_ROUTES: Routes = [
  {
    path: '',
    component: ProductList,
  },
  {
    path: 'add',
    component: AddProduct,
  },
  {
    path: ':id',
    component: ProductDetail,
  },
];
