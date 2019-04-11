import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {

  private username = 'lukaszbasaj';
  private client_id = '949e8ea08bace58ff7ae';
  private client_secret = 'a0c25c4972fce5af853d6e8cf374134138bde7c1';

  constructor(private _http:Http) {
    console.log('Github Service Init...') 
   }
    
   public getUser(){
     return this._http.get(`https://api.github.com/users/${this.username}`)
          .map((res => res.json())
          )}

    public getRepos(){
      return this._http.get(`https://api.github.com/users/${this.username}/repos`)
          .map((res => res.json())
          )}

}
