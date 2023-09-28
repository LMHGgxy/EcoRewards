import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioRegister,Response, UsuarioLogin } from './UserRegister.interface'
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})

const BACKEND_URL = ''

export class DbPostsService {

  constructor(
    private http: HttpClient,
    private Router:Router
    ) { }
  deleteAccount():Observable<Response>{
    const username = {
      username:localStorage.getItem('username')
    }
    const backend = `${BACKEND_URL}/api/deleteUser/`
    return this.http.post<Response>(backend,username)
  }
  getUser(): Observable<Response>{
    const username = localStorage.getItem('username')
    console.log(username)
    const backend = `${BACKEND_URL}/api/getPuntaje/${username}`
    return this.http.get<Response>(backend)
  }

  getUsers(): Observable<Response>{
    const backend = `${BACKEND_URL}/api/listUsers/`;
    return this.http.get<Response>(backend)
  }

  createUser(data: UsuarioRegister): Observable<Response>{
    const backend = `${BACKEND_URL}/api/addUser/`;
    return this.http.post<Response>(backend, data);
  }

  logUser(data: UsuarioLogin): Observable<Response>{
    const backend= `${BACKEND_URL}/api/logUser/`;
    return this.http.post<Response>(backend, data);
  }
  Islogged(){
    return localStorage.getItem('token')
  }
}
