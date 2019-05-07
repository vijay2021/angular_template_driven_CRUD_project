import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { DataTablesModule } from 'angular-datatables';


import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { HeadComponent } from './includes/head/head.component';
import { HeaderComponent } from './includes/header/header.component';
import { LeftComponent } from './includes/left/left.component';
import { FooterComponent } from './includes/footer/footer.component';
import { UserAddressComponent } from './users/user-address/user-address.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http'
import { HttpModule } from '@angular/http';
import { UserAddEditComponent } from './users/user-add-edit/user-add-edit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthModule } from './auth/auth.module';



@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HeadComponent,
    HeaderComponent,
    LeftComponent,
    FooterComponent,
    UserAddressComponent,
    DashboardComponent,
    UserAddEditComponent,
    PageNotFoundComponent

  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    DataTablesModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule,
    AuthModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
