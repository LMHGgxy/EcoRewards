import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private userData: string = '';
  private userPassword: string = '';
  private userDni: string = '';
  private userEmail: string = '';

  setUserEmail(data: string) { this.userEmail = data; };
  setUserDni(data: string) { this.userDni = data; };
  setUserData(data: string) { this.userData = data; };
  setUserPassword(data: string) { this.userPassword = data; };

  getLogin() {
    if (this.userData != '' && this.userPassword != '') {
      return { username: this.userData, password: this.userPassword }
    } else {
      return null
    }
  }
  getRegister(){
    if(this.userData != '' && this.userDni != '' && this.userPassword != '' && this.userEmail != ''){
      return {
        username: this.userData,
        email:this.userEmail,
        dni: this.userDni,
        password: this.userPassword,
        puntaje: 0
      }
    } else {
      return null
    }
  }
}