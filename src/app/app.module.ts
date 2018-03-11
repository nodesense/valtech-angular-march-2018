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


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,

        SharedModule
        // InventoryModule
    ],

    declarations: [
        // all components, directives, pipes
        AppComponent,
        HomeComponent,
        AboutComponent,
        ContactComponent,
        HeaderComponent,
        FooterComponent
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
