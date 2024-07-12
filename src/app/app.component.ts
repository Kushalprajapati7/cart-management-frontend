import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/services/auth.service';
import { NgxPermissionsService } from 'ngx-permissions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private permissionsService: NgxPermissionsService
  ) { }

  ngOnInit() {
    const role = this.authService.getRole();
    if (role) {
      this.permissionsService.loadPermissions([role]);
    } else {
      console.error('Role not found or invalid:', role);
    }
  }
}
