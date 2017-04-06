import {Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {RedirectComponent} from "./redirect/redirect.component";

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login',      component: LoginComponent },
  { path : 'redirect', component: RedirectComponent },
  { path: '**',
    redirectTo: '/login',
  },
];
