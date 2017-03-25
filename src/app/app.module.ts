import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {DBService } from './DBServices/dbservices';
import { RouterModule } from '@angular/router';

import { routes } from './app.routes';
import { HomeComponent } from './Home/home.component';
import { NavMenuComponent } from './NavMenu/navmenu.component';
import { AppCommmonComponent } from './app.common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DBService,AppCommmonComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
