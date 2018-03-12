// module is logical collection
// of all components

// +
// module references

import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModule } from './shared/shared.module';
import { NotFoundComponent } from './components/not-found/not-found.component';

import {RouterModule, Routes} from '@angular/router';
//import { ProductModule } from './product/product.module';

// Angular 4.3 onwards
// includes simple apis
// interceptors [auth]
import {HttpClientModule} from '@angular/common/http';
import { AuthGuard } from './shared/guards/auth.guard';


const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },

    {
        // lazy loading
        path: 'products',
        loadChildren: 'app/product/product.module#ProductModule',  // path to module file, class name
        canActivate: [AuthGuard]

    
    },

    {
        path: '**',
        component: NotFoundComponent
    }
];


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,

        SharedModule,
        // creates router module, based on routes
        RouterModule.forRoot(routes),

        //TODO: lazy load
       // ProductModule
        // InventoryModule
    ],

    declarations: [
        // all components, directives, pipes
        AppComponent,
        HomeComponent,
        AboutComponent,
        ContactComponent,
        HeaderComponent,
        FooterComponent,
        NotFoundComponent
        // HeaderComponent,
        // FooterComponent,
        // HomeComponent 
    ],

    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

}
