import {Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {RedirectComponent} from "./redirect/redirect.component";
import {ListComponent} from "./list/list.component";
import {AddComponent} from "./list/add/add.component";
import {HomeComponent} from "./home/home.component";
import {FilesComponent} from "./files/files.component";
import {FutureComponent} from "./future/future.component";

export const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},

  {path: 'list', component: ListComponent},
  {path: 'add', component: AddComponent},
  {path: 'login', component: LoginComponent},
  {path: 'redirect', component: RedirectComponent},
  {path: 'files' , component: FilesComponent},
  {path: 'allergies' , component: FutureComponent},
  {path: 'calories' , component: FutureComponent},
  {path: 'settings' , component: FutureComponent},

  {
    path: '**',
    redirectTo: '/home',
  },
];
