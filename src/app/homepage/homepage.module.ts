import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserslistComponent } from './userslist/userslist.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductslistComponent } from './productslist/productslist.component';
import { Routes, RouterModule } from '@angular/router';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {TemplateRef  } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';




@NgModule({
  imports: [
    CommonModule,RouterModule,FormsModule, ReactiveFormsModule,CollapseModule,ModalModule,TabsModule.forRoot()
  ],
  declarations: [LayoutComponent, SidebarComponent, UserslistComponent, OrdersComponent, ProductslistComponent, DashboardComponent]
})
export class HomepageModule { }
