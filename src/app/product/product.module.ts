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
        path: 'list',
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

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, 
    
    // Fixme: forClient
    RouterModule.forRoot(routes)
  ],
  declarations: [ProductHomeComponent, 
                 ProductListComponent, 
                 ProductEditComponent, 
                 ProductSearchComponent]
})
export class ProductModule { }