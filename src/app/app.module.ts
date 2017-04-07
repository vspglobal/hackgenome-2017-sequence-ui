import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {OauthService} from "./services/oauth/oauth.service";
import { LoginComponent } from './login/login.component';
import {RouterModule} from "@angular/router";
import { HeaderComponent } from './header/header.component';
import { RedirectComponent } from './redirect/redirect.component';

import {ToastOptions, ToastModule} from 'ng2-toastr';
import {CustomOption} from "./app.toast";
import {appRoutes} from "./app.routes";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ListComponent } from './list/list.component';
import {ListDaoService} from "./list/list-dao.service";
import { AddComponent } from './list/add/add.component';
import { HomeComponent } from './home/home.component';
import { BadgeComponent } from './home/badge/badge.component';
import { FilesComponent } from './files/files.component';
import {FileDaoService} from "./files/file-dao.service";
import { FutureComponent } from './future/future.component';
import { LoadingComponent } from './loading/loading.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    RedirectComponent,
    ListComponent,
    AddComponent,
    HomeComponent,
    BadgeComponent,
    FilesComponent,
    FutureComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ToastModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [OauthService, {provide: ToastOptions, useClass: CustomOption}, ListDaoService, FileDaoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
