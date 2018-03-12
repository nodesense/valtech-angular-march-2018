import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import {HttpClient} from '@angular/common/http';
import { environment } from '../../../environments/environment';

import {BehaviorSubject} from 'rxjs/BehaviorSubject';

import 'rxjs/add/operator/map';



@Injectable()
export class AuthService {

  authStatus: boolean = false;
  authSource: BehaviorSubject<boolean>;

  token: string;


  constructor(private http: HttpClient) { 

    this.token = window.localStorage.getItem('token');

    if (this.token) {
      this.authStatus = true;
    }

    this.authSource = new BehaviorSubject(this.authStatus);

  }

  isAuthenticated(): boolean {
    return this.authStatus;
  }

  login(username: string, password: string): Observable<any> {
      const data = {
        username: username,
        password: password
      };

      //TODO: save token
      return this.http.post(`${environment.authEndPoint}`, 
                            data)
                      .map ( tokenObj => {
                        console.log(" Response ", tokenObj);
                        
                        this.authStatus = true;
                        this.authSource.next(true);
                        this.token = tokenObj['token'];

                        window.localStorage.setItem('token', this.token);

                        return tokenObj; // pass to subcribe
                      });
                      
  }

  logout() {
    //TODO: remove token

    window.localStorage.removeItem('token');
    this.token = '';
    this.authStatus = false;
    this.authSource.next(false);
  }

}
