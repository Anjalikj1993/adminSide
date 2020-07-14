import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Observable, throwError } from 'rxjs'; 
import { catchError, tap, retry } from 'rxjs/operators';

// import { tap } from 'rxjs/operators';


const endpoint='http://localhost:55946/api/User';

// const endpoint3='http://localhost:55946/api/User/{id};
// const endpoint4='http://localhost:55946/api/Product?PageNumber={PageNumber}';
const endpoint4='http://localhost:55946/api/Product';
const endpoint5='http://localhost:55946/api/Category';

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
     return this.http.get(endpoint +'/'+ t).pipe(
      map(this.extractData));
  }

    ngOnInit(){
  this. getUser();
    }


addNewUser (q){
  // console.log(Response);
  return this.http.post<any>(endpoint , q).pipe(
    tap((product) => console.log(this.extractData))
  );
}


updateUsr(s){
return this.http.put<any>(endpoint +'/'+ s.userId , s).pipe(
    tap((product) => console.log(this.extractData))
  );
}

getCategories(){
  return this.http.get(endpoint5).pipe(
      map(this.extractData));
}

getProduct(y){
  return this.http.get(endpoint4+'?paginationModel.PageNumber='+y).pipe(
      map(this.extractData));
}

 addNewProduct (w){
  // console.log(Response);
  return this.http.post<any>(endpoint4 , w).pipe(
    tap((product) => console.log(this.extractData))
  );
}   

updateProduct(o){
return this.http.put<any>(endpoint4 +'/'+ o.productId , o).pipe(
    tap((product) => console.log(this.extractData))
  );
}


}

