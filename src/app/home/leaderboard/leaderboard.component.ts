import { Component } from '@angular/core';
import { DbPostsService } from 'src/app/services/db-posts.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent {
  userslist: any;
  constructor(private DbPostsService: DbPostsService){
    this.DbPostsService.getUsers().subscribe((response)=>{
      this.userslist = response.users;
    })
  }

}
