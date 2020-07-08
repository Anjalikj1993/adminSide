import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomepageModule} from './homepage/homepage.module';
import { LayoutComponent } from './homepage/layout/layout.component';
import { OrdersComponent } from './homepage/orders/orders.component';
import { ProductslistComponent } from './homepage/productslist/productslist.component';
import { UserslistComponent } from './homepage/userslist/userslist.component';
import {DashboardComponent} from './homepage/dashboard/dashboard.component';

const routes: Routes = [ {path:'',component:LoginComponent},
{path:'layout',component:LayoutComponent,children:[
 {path:'',redirectTo:'layout/homepage/productslist',pathMatch:'full'},
 {path:'layout/homepage/orders',component:OrdersComponent},
 {path:'layout/homepage/productslist',component:ProductslistComponent},
 {path:'layout/homepage/userslist',component:UserslistComponent},
 {path:'layout/homepage/dashboard',component:DashboardComponent}]
}];

// const routes: Routes = [ {path:'',component:LoginComponent,children:[
//   {path:'',redirectTo:'trial',pathMatch:'full'},{path:'trial',component:TrialComponent},
//   {path:'signin',loadChildren:'./signin/signin.module#SigninModule'},{path:'register', component:RegisterComponent},
//   {path:'aboutus', component:AboutusComponent},
//   {path:'album',component:AlbumComponent},{path:'search',component:SearchComponent}]
// }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
