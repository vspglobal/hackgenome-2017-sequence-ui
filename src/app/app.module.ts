import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {OauthService} from "./services/oauth/oauth.service";
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {RouterModule} from "@angular/router";
import { HeaderComponent } from './header/header.component';
import { RedirectComponent } from './redirect/redirect.component';

import {ToastOptions, ToastModule} from 'ng2-toastr';
import {CustomOption} from "./app.toast";
import {appRoutes} from "./app.routes";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ListComponent } from './home/list/list.component';
import {ListDaoService} from "./home/list/list-dao.service";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    RedirectComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ToastModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [OauthService, {provide: ToastOptions, useClass: CustomOption}, ListDaoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
