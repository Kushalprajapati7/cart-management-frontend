import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileListComponent } from './profile-list/profile-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'all-profile',
    pathMatch: 'full'
  },
  {
    path: 'all-profile',
    component: ProfileListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
