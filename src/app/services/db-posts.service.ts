import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioRegister,Response, UsuarioLogin } from './UserRegister.interface'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class DbPostsService {

  constructor(
    private http: HttpClient,
    private Router:Router
    ) { }


  deleteAccount():Observable<Response>{
    const username = {
      username:localStorage.getItem('username')
    }
    const backend = `http://192.168.18.121:5050/api/deleteUser/`
    return this.http.post<Response>(backend,username)
  }
  getUser(): Observable<Response>{
    const username = localStorage.getItem('username')
    console.log(username)
    const backend = `http://192.168.18.121:5050/api/getPuntaje/${username}`
    return this.http.get<Response>(backend)
  }

  getUsers(): Observable<Response>{
    const backend = `http://192.168.18.121:5050/api/listUsers/`;
    return this.http.get<Response>(backend)
  }

  createUser(data: UsuarioRegister): Observable<Response>{
    const backend = `http://192.168.18.121:5050/api/addUser/`;
    return this.http.post<Response>(backend, data);
  }

  logUser(data: UsuarioLogin): Observable<Response>{
    const backend= `http://192.168.18.121:5050/api/logUser/`;
    return this.http.post<Response>(backend, data);
  }
  Islogged(){
    return localStorage.getItem('token')
  }
}
