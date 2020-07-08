import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Observable, throwError } from 'rxjs'; 
import { catchError, tap, retry } from 'rxjs/operators';

// import { tap } from 'rxjs/operators';


const endpoint='http://localhost:55946/api/user/getallusers';
const endpoint1='http://localhost:55946/api/User';
// const endpoint2='http://localhost:55946/api/User/{id}';
// const endpoint3='http://localhost:55946/api/User/{id};
const endpoint4='http://localhost:55946/api/product/getallproducts';
@Injectable({
  providedIn: 'root'
})

export class MyserviceService {

  constructor(private http:HttpClient) { }


  private extractData(res: Response) {
    let body = res;
    return body || {};
  }


  getUser() {
    return this.http.get(endpoint).pipe(
      map(this.extractData));
  }

  searchUsr(t){
     return this.http.get(endpoint1 +'/'+ t).pipe(
      map(this.extractData));
  }

    ngOnInit(){
  this. getUser();
    }


addNewUser (q){
  // console.log(Response);
  return this.http.post<any>(endpoint1 , q).pipe(
    tap((product) => console.log(this.extractData))
  );
}


updateUsr(s){
return this.http.put<any>(endpoint1 +'/'+ s.userId , s).pipe(
    tap((product) => console.log(this.extractData))
  );
}

getProduct(){
  return this.http.get(endpoint4).pipe(
      map(this.extractData));
}

    
}

