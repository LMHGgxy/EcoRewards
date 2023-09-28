import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogComponent } from './login/log/log.component';
import { RegComponent } from './login/reg/reg.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { CheckLoginGuard } from './Guards/check-login.guard';
import { HomePrincipalComponent } from './home/home-principal/home-principal.component';
import { LeaderboardComponent } from './home/leaderboard/leaderboard.component';
import { UserPrincipalComponent } from './home/user-principal/user-principal.component';
import { InformationComponent } from './home/information/information.component';

const routes: Routes = [
  { path: '', redirectTo:'auth',pathMatch:'full'},
  {
    path: 'auth',
    component: LoginComponent,
    children:[
      { path: '', redirectTo:'login',pathMatch:'full'},
      {path:'login',component:LogComponent},
      {path:'register',component:RegComponent}
  ] },
  {
    path: 'home', component: HomeComponent, canActivate: [CheckLoginGuard],
    children:[
      {path:'',component:HomePrincipalComponent},
      {path:'Leaderboard',component:LeaderboardComponent},
      {path:'Profile',component:UserPrincipalComponent},
      {path:'informacion',component:InformationComponent}
    ]
  },
  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
