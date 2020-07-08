import { Component, OnInit} from '@angular/core';
import { MyserviceService } from 'src/app/myservice.service';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {  FormBuilder, Validators, EmailValidator } from '@angular/forms';
import { FormGroup,FormControl} from '@angular/forms';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit {
x=[];
useridstorage;
 alluser:any;
 userSearched:any;
 modalRef: BsModalRef;
  constructor(private modalService: BsModalService, public myservice:MyserviceService, private fb1: FormBuilder) { }

myform = this.fb1.group({
    fstname:['',[Validators.required]],
    lstname:['',[Validators.required]],
    usrname:['',[Validators.required]],
    psword:['',[Validators.required,Validators.pattern("[0-9a-z]{8,32}")]],
    eml:['',[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")]],
    phn:['',[Validators.required,Validators.pattern("[0-9]{10}")]],
    address: ['',[Validators.required]],
    cty:['',[Validators.required]],
    state:['',[Validators.required]],
    cntry:['',[Validators.required]]
    });


openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit() {
    this.fetchData();
  }
 

  fetchData(){
     this.myservice.getUser().subscribe((response)=>{
         console.log(response);
         this.alluser=response;
                  console.log(this.alluser);
       
     });
  }
  
  searchUser(idValue){
     this.myservice.searchUsr(idValue).subscribe((response)=>{
         console.log(response);
         this.userSearched=response;
                  console.log(this.userSearched);
       
     });
  }

addUser() {
    this.myservice.addNewUser({ "firstname": this.myform.get('fstname').value,
    "lastname": this.myform.get('lstname').value,
    "username": this.myform.get('usrname').value,
    "password": this.myform.get('psword').value,
    // "role": this.myform.get('role').value,
    "email": this.myform.get('eml').value,
    "address": this.myform.get('address').value,
    "city": this.myform.get('cty').value,
    "state": this.myform.get('state').value,
    "country":this.myform.get('cntry').value, 
    "phone": this.myform.get('phn').value,
    }).subscribe((result) => {
         console.log(result);
      // this.router.navigate(['/list']);

    }, (err) => {

      console.log(err);

    });
}


  autoPopulate(ind,m){
       this.myform.get('fstname').setValue(this.alluser[ind].firstName);
       this.myform.get('lstname').setValue(this.alluser[ind].lastName);
       this.myform.get('usrname').setValue(this.alluser[ind].userName);
       this.myform.get('psword').setValue(this.alluser[ind].password);
        this.myform.get('eml').setValue(this.alluser[ind].email);
        this.myform.get('address').setValue(this.alluser[ind].address);
        this.myform.get('cty').setValue(this.alluser[ind].city);
        this.myform.get('state').setValue(this.alluser[ind].state);
        this.myform.get('cntry').setValue(this.alluser[ind].country);
        this.myform.get('phn').setValue(this.alluser[ind].phone);

                  this.useridstorage=this.alluser[ind].userId;
                  // this.useridstorage=m;
  }

//     setProduct(ind,m){
//       this.myform.setValue({
//   fstname=this.alluser[ind].firstName;
//   lstname=this.alluser[ind].lastName;
//   usrname=this.alluser[ind].userName;
//   psword=this.alluser[ind].password;
//   eml=this.alluser[ind].email;
//   address=this.alluser[ind].address;
//   cty=this.alluser[ind].city;
//   state=this.alluser[ind].state;
//   cntry=this.alluser[ind].country;
//   phn=this.alluser[ind].phone;
// });
//                   this.useridstorage=this.alluser[ind].userId;
//                   // this.useridstorage=m;
//   }

updateUser( )
{this.myservice.updateUsr({ "userId":this.useridstorage,
"firstname": this.myform.get('fstname').value,
    "lastname": this.myform.get('lstname').value,
     "username": this.myform.get('usrname').value,
       "password": this.myform.get('psword').value,
    // "role": this.myform.get('role').value,
    "email": this.myform.get('eml').value,
    "address": this.myform.get('address').value,
    "city": this.myform.get('cty').value,
    "state": this.myform.get('state').value,
    "country":this.myform.get('cntry').value, 
    "phone": this.myform.get('phn').value,
    }).subscribe((result) => {
         console.log(result);
      // this.router.navigate(['/list']);

    }, (err) => {

      console.log(err);

    });

}
get fname()
{
  return this.myform.get('fstname');
}
get lname()
{
  return this.myform.get('lstname');
}
get usrnme()
{
  return this.myform.get('usrname');
}
get pwd()
{
  return this.myform.get('psword');
}
get email()
{
  return this.myform.get('eml');
}
get ph()
{
  return this.myform.get('phn');
}
get addr()
{
  return this.myform.get('address');
}
get city1()
{
  return this.myform.get('cty');
}

get stat()
{
  return this.myform.get('state');
}
get country1()
{
  return this.myform.get('cntry');
}

}





















// import { Component, OnInit} from '@angular/core';
// import { MyserviceService } from 'src/app/myservice.service';
// import { ModalModule } from 'ngx-bootstrap/modal';
// import { TemplateRef } from '@angular/core';
// import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
// import {  FormBuilder, Validators, EmailValidator } from '@angular/forms';
// import { FormGroup,FormControl} from '@angular/forms';
// import { FormsModule, ReactiveFormsModule} from '@angular/forms';


// @Component({
//   selector: 'app-userslist',
//   templateUrl: './userslist.component.html',
//   styleUrls: ['./userslist.component.css']
// })
// export class UserslistComponent implements OnInit {
// fstname;
// lstname;
// usrname;
// psword;
// eml;
// phn;
// address;
// cty;
// state;
// cntry;
// x=[];
// useridstorage;
//  alluser:any;
//  modalRef: BsModalRef;
//   constructor(private modalService: BsModalService, public myservice:MyserviceService) { }



// openModal(template: TemplateRef<any>) {
//     this.modalRef = this.modalService.show(template);
//   }

//   ngOnInit() {
//     this.fetchData();
//   }
 

//   fetchData(){
//      this.myservice.getData().subscribe((response)=>{
//          console.log(response);
//          this.alluser=response;
//                   console.log(this.alluser);
       
//      });
//   }

// addUser() {
//     this.myservice.addProduct({ "firstname": this.fstname,
//     "lastname": this.lstname,
//     "username": this.usrname,
//     "password": this.psword,
//      // "role": this.role,
//     "email": this.eml,
//     "address": this.address,
//      "city": this.cty,
//      "state": this.state,
//      "country": this.cntry,
//      "phone": this.phn
//     }).subscribe((result) => {
//          console.log(result);
//       // this.router.navigate(['/list']);

//     }, (err) => {

//       console.log(err);

//     });
// }


//   setProduct(ind,m){
//     this.fstname=this.alluser[ind].firstName;
//     this.lstname=this.alluser[ind].lastName;
//        this.usrname=this.alluser[ind].userName;
//             this.psword=this.alluser[ind].password;
//                     this.eml=this.alluser[ind].email;
//                         this.address=this.alluser[ind].address;
//                             this.cty=this.alluser[ind].city;
//                                 this.state=this.alluser[ind].state;
//                                     this.cntry=this.alluser[ind].country;
//                                       this.phn=this.alluser[ind].phone;

//                                       this.useridstorage=this.alluser[ind].userId;
//                                       // this.useridstorage=m;
//   }
// updateUser( )
// {this.myservice.updateUsr({ "userId":this.useridstorage,
//    "firstname": this.fstname,
//     "lastname": this.lstname,
//     "username": this.usrname,
//     "password": this.psword,
//     // "role": this.role,
//     "email": this.eml,
//     "address": this.address,
//     "city": this.cty,
//     "state": this.state,
//     "country": this.cntry,
//     "phone": this.phn
//     }).subscribe((result) => {
//          console.log(result);
//       // this.router.navigate(['/list']);

//     }, (err) => {

//       console.log(err);

//     });

// // console.log(ind);
// // console.log(x);
// }

// }
