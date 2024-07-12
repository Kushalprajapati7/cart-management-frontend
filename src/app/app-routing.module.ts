import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';

const routes: Routes = [
  {
    path:'auth',
    // component:LoginComponent,
    loadChildren:()=>import('./authentication/authentication.module').then(m=>m.AuthenticationModule),
    // canActivate: []
  },
  {
    path:'home',
    component: SidebarComponent,
    loadChildren:()=>import('./pages/pages.module').then(m=>m.PagesModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
