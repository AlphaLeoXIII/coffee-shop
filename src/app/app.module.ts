import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { OrderComponent } from './order/order.component';
import { ContactComponent } from './contact/contact.component';
import {AppRoutingModule} from './app.routes';
import {Routes} from '@angular/router';

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // HomeComponent,
    MenuComponent,
    OrderComponent,
    AppComponent,
    ContactComponent
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
