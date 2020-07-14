import { Component, OnInit } from '@angular/core';

import { MyserviceService } from 'src/app/myservice.service';
import { ActivatedRoute, Router } from '@angular/router';
 import {  FormBuilder, Validators, EmailValidator } from '@angular/forms';
// import { Router } from '@angular/router';
import { FormGroup,FormControl} from '@angular/forms';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-productslist',
  templateUrl: './productslist.component.html',
  styleUrls: ['./productslist.component.css']
})
export class ProductslistComponent implements OnInit {

totalNumPages1:any;
totalNumPages:Array<number>;
z:number=1;
 result:any;
 c:any;
modalRef: BsModalRef;
categoriesArray:Array<number>;
productidstorage;
  constructor(private modalService: BsModalService,public myservice:MyserviceService, private router: Router,private fb2: FormBuilder) { }


myform1 = this.fb2.group({
    name:['',[Validators.required]],
    prId:['',[Validators.required]],
    des:['',[Validators.required]],
    // prc:['',[Validators.required,Validators.pattern("[0-9a-z]{8,32}")]],
    // sQty:['',[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")]],
    // imgName:['',[Validators.required,Validators.pattern("[0-9]{10}")]],
        prc:['',[Validators.required]],
    sQty:['',[Validators.required]],
    imgName:[''],
    dispOrdr: [''],
    isAct:[''],
    isFeat:[''],
    catgId:['']
      // imgName:['',[Validators.required]],
    //   dispOrdr: ['',[Validators.required]],
    // isAct:['',[Validators.required]],
    // isFeat:['',[Validators.required]],
    // catgId:['',[Validators.required]]
    });
  ngOnInit() {
       this.fetchProduct(); 
       this.getCategory();
  }

openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

setPageNumber(p){
this.z=p;
this.fetchProduct(); 
}

 getCategory(){
     this.myservice.getCategories().subscribe((response)=>{

         console.log(response);
               
         this.c=response;
          console.log(this.c);
          // this.categoriesArray=c[2].categoryId;
          //        console.log(this.categoriesArray);
       
     });
  }


  fetchProduct(){
     this.myservice.getProduct(this.z).subscribe((response)=>{

         console.log(response);


//          if(response && response.data)
 //{       
   this.result=response.data;
         this.totalNumPages= new Array (response.page.totalPages);
                  this.totalNumPages1= response.page.totalPages;
                  // console.log(this.result);
                  // console.log(this.totalNumPages);
//}
       
     });
  }
 autoPopulate(ind,m){
 console.log(ind);
       this.myform1.get('prId').setValue(this.result[ind].productId);
       this.myform1.get('catgId').setValue(this.result[ind].categoryId);
       this.myform1.get('name').setValue(this.result[ind].name);
       this.myform1.get('prc').setValue(this.result[ind].unitPrice);
        this.myform1.get('sQty').setValue(this.result[ind].stockQuantity);
        this.myform1.get('des').setValue(this.result[ind].description);
        this.myform1.get('isAct').setValue(this.result[ind].isActive);
        this.myform1.get('isFeat').setValue(this.result[ind].isFeatured);
        this.myform1.get('dispOrdr').setValue(this.result[ind].displayOrder);
        //this.myform1.get('imgName').setValue(this.result[ind].fileName);

                  this.productidstorage=this.result[ind].productId;
                  // this.productidstorage=m;
  }

updateprod( )
{this.myservice.updateProduct({ "productId":this.productidstorage,
"name": this.myform1.get('name').value,
    "description": this.myform1.get('des').value,
     "unitPrice": this.myform1.get('prc').value,
       "stockQuantity": this.myform1.get('sQty').value,
   // "fileName": this.myform1.get('imgName').value,
    "isActive": this.myform1.get('isAct').value,
    "isFeatured": this.myform1.get('isFeat').value,
    "displayOrder": this.myform1.get('dispOrdr').value,
    "categoryId":this.myform1.get('catgId').value, 
    }).subscribe((result) => {
         console.log(result);
      // this.router.navigate(['/list']);

    }, (err) => {

      console.log(err);

    });

}

// for (var j=1;j<=totalNumPages;j++;)
// {
//   this.limitArray.push(j);
// }

addProduct(){
   this.myservice.addNewProduct({ "name": this.myform1.get('name').value,
    "productId": this.myform1.get('prId').value,
    "description": this.myform1.get('des').value,
    "unitPrice": this.myform1.get('prc').value,
    "stockQuantity": this.myform1.get('sQty').value,
    "fileName": this.myform1.get('imgName').value,
    "displayOrder": this.myform1.get('dispOrdr').value,
    "isActive": this.myform1.get('isAct').value,
    "isFeatured":this.myform1.get('isFeat').value, 
    "categoryId": this.myform1.get('catgId').value,
    }).subscribe((result) => {
         console.log(result);
      // this.router.navigate(['/list']);

    }, (err) => {

      console.log(err);

    });
}

get name1()
{
  return this.myform1.get('name');
}
get prId1()
{
  return this.myform1.get('prId');
}
get des1()
{
  return this.myform1.get('des');
}
get pwd1()
{
  return this.myform1.get('prc');
}
get sQty1()
{
  return this.myform1.get('sQty');
}
get imgName1()
{
  return this.myform1.get('imgName');
}
// get dispOrdr1()
// {
//   return this.myform1.get('dispOrdr');
// }
// get isAct1()
// {
//   return this.myform1.get('isAct');
// }

// get isFeat1()
// {
//   return this.myform1.get('isFeat');
// }
// get catgId1()
// {
//   return this.myform1.get('catgId');
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
