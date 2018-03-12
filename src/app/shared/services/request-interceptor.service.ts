import { Injectable, Injector } from '@angular/core';

import { HttpInterceptor, 
        HttpRequest, 
        HttpHandler, 
        HttpEvent } from '@angular/common/http';

import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RequestInterceptorService implements HttpInterceptor  {

  private authService: AuthService;

  constructor(private injector: Injector) {
    console.log("Interceptor created");
  }
  
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
     
    console.log ("Intercepter ", request.url);
    //TODO: injector

    if (!this.authService) {
      this.authService = this.injector.get(AuthService);
    }

    //TODO: Inject token

    request = request.clone({
      setHeaders: {
        Authorization: `JWT ${this.authService.token}`
      }
    });
    
    return next.handle(request);
  }

}