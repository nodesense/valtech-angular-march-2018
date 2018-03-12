import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductHomeComponent } from './product-home/product-home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductSearchComponent } from './product-search/product-search.component';

import {Routes, RouterModule} from '@angular/router';

import {FormsModule, 
  ReactiveFormsModule} 
  from '@angular/forms';
import { ProductService } from './services/product.service';
import { SharedModule } from '../shared/shared.module';
import { SaveWorkGuardService } from './services/save-work-guard.service';


const routes: Routes = [
  {
    path: '', // products is coming from lazy load
    component: ProductHomeComponent,

    // nested nav
    children: [
      {
        path: '',
        component: ProductListComponent
      }, 
      {
        path: 'create',
        component: ProductEditComponent,
        canDeactivate: [SaveWorkGuardService]
      },
      {
        path: 'edit/:id', 
        component: ProductEditComponent,
        canDeactivate: [SaveWorkGuardService]
      }, {
        path: 'search',
        component: ProductSearchComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, 
    
    // Fixme: forChild, for lazy load
    RouterModule.forChild(routes),

    SharedModule
  ],
  declarations: [ProductHomeComponent, 
                 ProductListComponent, 
                 ProductEditComponent, 
                 ProductSearchComponent],

  providers: [
    ProductService,
    SaveWorkGuardService
  ]
})
export class ProductModule { }
