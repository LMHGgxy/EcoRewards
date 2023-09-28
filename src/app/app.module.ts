import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InputTextModule } from 'primeng/inputtext';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { PanelModule } from 'primeng/panel';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ButtonModule } from 'primeng/button'
import { AutoFocusModule } from 'primeng/autofocus';
import { LogComponent } from './login/log/log.component';
import { RegComponent } from './login/reg/reg.component';
import { FormsModule } from '@angular/forms';
import { MessagesModule } from 'primeng/messages'
import { ToastModule } from 'primeng/toast';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { ChartModule } from 'primeng/chart';
import { CardModule } from 'primeng/card';
// import { MenuModule } from 'primeng/menu';
import { DockModule } from 'primeng/dock';
import { HomePrincipalComponent } from './home/home-principal/home-principal.component';
import { UserPrincipalComponent } from './home/user-principal/user-principal.component';
import { LeaderboardComponent } from './home/leaderboard/leaderboard.component';
import { DataViewModule, DataViewLayoutOptions } from 'primeng/dataview';
import { InformationComponent } from './home/information/information.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogComponent,
    RegComponent,
    HomeComponent,
    NotFoundComponent,
    HomePrincipalComponent,
    UserPrincipalComponent,
    LeaderboardComponent,
    InformationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    TabMenuModule,
    BrowserAnimationsModule,
    PanelModule,
    ButtonModule,
    AutoFocusModule,
    FormsModule,
    MessagesModule,
    ToastModule,
    HttpClientModule,
    ChartModule,
    CardModule,
    DockModule,
    DataViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
  export class AppModule { }
