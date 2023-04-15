import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { DesginService } from './appServices/desgin.service';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DesginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
