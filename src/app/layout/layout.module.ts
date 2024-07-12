import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { NgxPermissionsModule } from 'ngx-permissions';



@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule,
    NgxPermissionsModule.forChild()
  ]
})
export class LayoutModule { }
