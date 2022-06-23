import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';

import { catchError, filter, Observable, of, throwError, } from 'rxjs';
import { error } from '@angular/compiler/src/util';
import { Router } from '@angular/router';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private router:Router){}
  
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request)
    console.log(request)
    if(request.body !== null){
      this.router.navigate(['./footer'])
      console.log("api is loaded body successfully")
    }
    return next.handle(request).pipe(
      
      catchError((error:HttpErrorResponse)=>{
        if((error)){
          if(error.status==404){
          console.log(error.status)
          this.router.navigate(['./footer'])
        }
        
        }
       
        return throwError(error);
      })
     )
     
  
      console.log(request)
      
      console.log(request instanceof HttpRequest)
      return next.handle(request);
    }
  }