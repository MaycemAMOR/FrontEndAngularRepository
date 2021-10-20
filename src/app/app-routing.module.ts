import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { ListToDosComponent } from './list-to-dos/list-to-dos.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { TodoComponent } from './todo/todo.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
{path:'', component: LoginComponent }, //canActivate, RouteGuardService
{path:'login', component: LoginComponent},
{path:'welcome/:name', component: WelcomeComponent,canActivate:[RouteGuardService]},
{path:'todos', component: ListToDosComponent,canActivate:[RouteGuardService]},
{path:'logout', component: LogoutComponent,canActivate:[RouteGuardService]},
{path:'todos/:id', component: TodoComponent,canActivate:[RouteGuardService]},

{path:'**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
