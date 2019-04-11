import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {

  private username = 'lukaszbasaj';
  private client_id = '949e8ea08bace58ff7ae';
  private client_secret = 'a0c25c4972fce5af853d6e8cf374134138bde7c1';

  constructor(private _http:Http) {
   }
    
   public getUser(){
     return this._http.get(`https://api.github.com/users/${this.username}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
          .map((res => res.json())
          )}

    public getRepos(){
      return this._http.get(`https://api.github.com/users/${this.username}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}`)
          .map((res => res.json())
          )}
          
    updateUsername(username:string){
        this.username = username;
    }

}
