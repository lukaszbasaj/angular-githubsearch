import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor, HttpRequest, HttpHandler, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Username } from '../user.model'
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';

@Injectable()
export class GithubService {

  private username:Username[];
  private client_id = '949e8ea08bace58ff7ae';
  private client_secret = 'a0c25c4972fce5af853d6e8cf374134138bde7c1';
  headers: HttpHeaders;
  options: any;
  apiUrl = 'https://api.github.com/users/';

  constructor(req: HttpRequest<any>, next: HttpHandler) {
   }
    
   public getUser():Observable<Username[]>{
     return this._http.get<Username[]>(`${this.apiUrl}${this.username}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
          .map((res => res.json())
          )}

    public getRepos(){
      return this._http.get(`${this.apiUrl}${this.username}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}`)
          .map((res => res.json())
          )}
          
    updateUsername(username:string){
        this.username = username;
    }

}
