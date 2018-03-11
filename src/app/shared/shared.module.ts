import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddressComponent } from './components/address/address.component';
import { LikeComponent } from './components/like/like.component';
import { HighlightDirective } from './directives/highlight.directive';
import { PowerPipe } from './pipes/power.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { DataService } from './services/data.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AddressComponent, 
    LikeComponent, 
    HighlightDirective, 
    PowerPipe, 
    FilterPipe],

    exports: [
      // allow other module to use component, directive, pipes
      AddressComponent, 
      LikeComponent, 
      HighlightDirective, 
      PowerPipe, 
      FilterPipe
    ],

    // module prodiver
    // signle instance per application
    providers: [
      DataService
    ]
})
export class SharedModule { }
