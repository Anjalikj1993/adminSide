import { Component, OnInit } from '@angular/core';

import { MyserviceService } from 'src/app/myservice.service';
import { ActivatedRoute, Router } from '@angular/router';
// import {  FormBuilder, Validators, EmailValidator } from '@angular/forms';
// import { Router } from '@angular/router';
// import { FormGroup,FormControl} from '@angular/forms';
// import { FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-productslist',
  templateUrl: './productslist.component.html',
  styleUrls: ['./productslist.component.css']
})
export class ProductslistComponent implements OnInit {
firstname;
lastname;
username;
password;
role;email;address;city;
  constructor(public myservice:MyserviceService, private router: Router) { }

  ngOnInit() {
       this.fetchProduct(); 
  }

  result:any;

  fetchProduct(){
     this.myservice.getProduct().subscribe((response)=>{
         console.log(response);
         this.result=response;
                  console.log(this.result);

       
     });
  }




// addProduct() {

//     this.myservice.addProduct({ "firstname": this.firstname,

//     "lastname": this.lastname,

//     "username": this.username,

//     "password": this.password,

//     "role": this.role,

//     "email": this.email,

//     "address": this.address,

//     "city": "sample string 9",

//     "state": "sample string 10",

//     "country": "sample string 11",

//     "phone": "sample string 12"

  //   }).subscribe((result) => {
  //        console.log(result);
  //     // this.router.navigate(['/list']);

  //   }, (err) => {

  //     console.log(err);

  //   });

  // }

}











// import { Component, OnInit } from '@angular/core';
// import { RestService } from '../rest.service';
// import { ActivatedRoute, Router } from '@angular/router';
// @Component({
//   selector: 'app-adduser',
//   templateUrl: './adduser.component.html',
//   styleUrls: ['./adduser.component.scss']
// })
// export class AdduserComponent implements OnInit {
// firstname;
// lastname;
// username;
// password;
// role;email;address;city;
//   constructor(private reest:RestService,private router: Router) { }

//   ngOnInit(): void {
   
//   }
//   // addProduct(){
//   //   this.reest.addProduct({firstname:'',lastname:''})
     
    
//   // }
//   add() {
//     this.router.navigate(['/list']);
//   }
  // addProduct() {
  //   this.reest.addProduct({ "firstname": this.firstname,
  //   "lastname": this.lastname,
  //   "username": this.username,
  //   "password": this.password,
  //   "role": this.role,
  //   "email": this.email,
  //   "address": this.address,
  //   "city": "sample string 9",
  //   "state": "sample string 10",
  //   "country": "sample string 11",
  //   "phone": "sample string 12"}).subs
