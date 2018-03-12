import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddressComponent } from './components/address/address.component';
import { LikeComponent } from './components/like/like.component';
import { HighlightDirective } from './directives/highlight.directive';
import { PowerPipe } from './pipes/power.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { DataService } from './services/data.service';
import { LoginComponent } from './components/login/login.component';

import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    }
];

import {FormsModule} from '@angular/forms';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { SaveAlertGuard } from './guards/save-alert.guard';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    AddressComponent, 
    LikeComponent, 
    HighlightDirective, 
    PowerPipe, 
    FilterPipe, LoginComponent],

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
      DataService,
      AuthService, 
      AuthGuard,
      SaveAlertGuard
    ]
})
export class SharedModule { }
