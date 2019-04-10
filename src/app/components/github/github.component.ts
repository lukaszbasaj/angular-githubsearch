import { Component } from '@angular/core';
import { GithubService } from '../../services/github.service';

@Component({
  moduleId: module.id,
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css'],
  providers: [GithubService]
})
export class GithubComponent {

  user:any;

  constructor(private _githubService:GithubService) { 
    // console.log('Github Component Init...');
    this._githubService.getUser().subscribe(user => {
      // console.log(user);
      this.user = user;
    });
  };

}
