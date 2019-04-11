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

  user: string;
  repos: string;
  username: string;

  constructor(private _githubService: GithubService) { }

  search() {
    this._githubService.updateUsername(this.username)

    this._githubService.getUser().subscribe(user => {
      this.user = user;
    });
    this._githubService.getRepos().subscribe(repos => {
      this.repos = repos;
    })
  };
}

