import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductHomeComponent } from './product-home/product-home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductSearchComponent } from './product-search/product-search.component';

import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: 'products',
    component: ProductHomeComponent,

    // nested nav
    children: [
      {
        path: '',
        component: ProductListComponent
      }, 
      {
        path: 'create',
        component: ProductEditComponent
      },
      {
        path: 'edit/:id', 
        component: ProductEditComponent
      }, {
        path: 'search',
        component: ProductSearchComponent
      }
    ]
  }
];

import {FormsModule, 
        ReactiveFormsModule} 
        from '@angular/forms';
import { ProductService } from './services/product.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, 
    
    // Fixme: forClient
    RouterModule.forRoot(routes),

    SharedModule
  ],
  declarations: [ProductHomeComponent, 
                 ProductListComponent, 
                 ProductEditComponent, 
                 ProductSearchComponent],

  providers: [
    ProductService
  ]
})
export class ProductModule { }
