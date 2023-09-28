import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent {
  constructor(private DataService: DataService) {
  }
  username:string = ''
  password:string = ''

  changeUsername(event:any){
    this.DataService.setUserData(event.target.value)
    // console.log(this.DataService.getUser())
  }
  changePassword(event:any){
    this.DataService.setUserPassword(event.target.value)
    // console.log(this.DataService.getUser())
  }
}
