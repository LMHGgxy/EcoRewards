import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DbPostsService } from 'src/app/services/db-posts.service';

@Component({
  selector: 'app-user-principal',
  templateUrl: './user-principal.component.html',
  styleUrls: ['./user-principal.component.scss']
})
export class UserPrincipalComponent {
  constructor(
    private DbPostsService:DbPostsService,
    private router:Router
    ){}
  DeleteAccount(){
    this.DbPostsService.deleteAccount().subscribe((response)=>{
      localStorage.clear()
      this.router.navigate([''])
    })
  }
}
