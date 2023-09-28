import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { MessageService } from 'primeng/api';
import { DbPostsService } from '../services/db-posts.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService]
})
export class LoginComponent {
  constructor(
    private router: Router,
    private DataService: DataService,
    private MessageService: MessageService,
    // private http: HttpClient
    private DbPostsService: DbPostsService
  ) { }
  registerLabel = "Registrar"
  loginLabel = "Ingresar"
  Login() {
    if (this.router.url === "/auth/login") {
      const loginData = this.DataService.getLogin();
      if (loginData) {
        this.DbPostsService.logUser(loginData).subscribe((response)=>{
          const auth = response.authenticated;
          const token = response.token;
          const username = response.username
          if(auth && token && username){
            this.cleanBasicData()
            localStorage.clear()
            localStorage.setItem('token',token)
            localStorage.setItem("username",username);
            this.router.navigate(["/home"])

          } else {
            this.MessageService.add(
              {
                severity: 'error',
                summary: 'Inicio de sesión invalido',
                detail: 'Los datos son incorrectos',
                life: 1000
              });
          }
        })
      } else {
        this.MessageService.add(
          {
            severity: 'error',
            summary: 'Inicio de sesión invalido',
            detail: 'Rellene los datos por favor',
            life: 1000
          });
      }
    } else {
      this.cleanBasicData();
      this.router.navigate(['/auth/login']);
      this.registerLabel = "Registrar"
    }
  }

  Register() {
    if (this.router.url === '/auth/register') {
      const registerData = this.DataService.getRegister(); 
      if(registerData) {
        this.DbPostsService.createUser(registerData)
          .subscribe(
            (data) => {
              const token = data.token;
              const username = data.username;
              if(token && username){
                this.cleanBasicData()
                localStorage.clear()
                localStorage.setItem("token", token);
                localStorage.setItem("username",username);
                this.router.navigate(['/home'])
              }
            });
      } else {
        this.MessageService.add(
          {
            severity: 'error',
            summary: 'Registro invalido',
            detail: 'Rellene los datos por favor',
            life: 1000
          });
      }
    } else {
      this.cleanBasicData();
      this.router.navigate(['/auth/register']);
      this.registerLabel = "Continuar"
    }
  }
  cleanBasicData() {
    this.DataService.setUserData('')
    this.DataService.setUserPassword('')
    this.DataService.setUserDni('')
    this.DataService.setUserEmail('')
  }
}