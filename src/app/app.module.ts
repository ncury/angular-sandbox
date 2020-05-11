import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';
import { AppRoutingModule } from './app-routing/app-routing/app-routing.module';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ProductModule,
    AppRoutingModule
  ],
    declarations: [
    AppComponent,
    WelcomeComponent
  ],
  bootstrap: [AppComponent]
}) 
export class AppModule { }
