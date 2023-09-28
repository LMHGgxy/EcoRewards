import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.scss']
})
export class RegComponent {
  constructor(private DataService: DataService){}
  changeUsername(event:any){
    this.DataService.setUserData(event.target.value)
  }
  changePassword(event:any){
    this.DataService.setUserPassword(event.target.value)
  }
  changeDni(event:any){
    this.DataService.setUserDni(event.target.value)
  }
  changeEmail(event:any){
    this.DataService.setUserEmail(event.target.value)
  }
}
