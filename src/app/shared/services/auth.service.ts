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


  constructor(private http: HttpClient) { 

    this.authSource = new BehaviorSubject(false);

  }

  isAuthenticated(): boolean {
    return false;
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
                        return tokenObj; // pass to subcribe
                      });
                      
  }

  logout() {
    //TODO: remove token
  }

}
