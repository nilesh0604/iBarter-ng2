import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable }  from 'rxjs/Observable';
import { Env }  from './env';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AuthService {

  constructor(private _http: Http) { }

  login(credentials){
  	let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
  	return this._http.post(Env.API_ENDPOINT+'authenticate', credentials, options)
        .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let authData = response.json();
                if (authData && authData.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(authData));
                }
            });
  			/*.map((response: Response) => response.json())
  			.catch(this._errorHandler);*/
  }

  register(credentials){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(Env.API_ENDPOINT+'users', credentials, options)
        .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                console.log(user);
                /*if (user && authData.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(authData));
                }*/
            });
        /*.map((response: Response) => response.json())
        .catch(this._errorHandler);*/
  }

  /*_errorHandler(error: Response){
  		console.error(error);
  		return Observable.throw(error || "Server Error");
  }*/

  logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }

}
