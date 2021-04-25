import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { GoogleMapsModule } from '@angular/google-maps';
import { ThreeComponent } from './three/three.component';

@NgModule({
    declarations: [
        AppComponent,
        ThreeComponent
    ],
    imports: [
        GoogleMapsModule,
        BrowserModule
    ],
    providers: [
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy
            
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
