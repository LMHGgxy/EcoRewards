import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { DbPostsService } from '../services/db-posts.service';

@Injectable({
  providedIn: 'root'
})
export class CheckLoginGuard implements CanActivate {
  constructor(
    private DbPostsService: DbPostsService,
    private router: Router
    ){}
  canActivate(){
    if(this.DbPostsService.Islogged()){
      return true;
    }
    this.router.navigate(["/"])
    return false
  }
}
