import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { IUser } from '../interface/userInterface';
import { NgxPermissionsService } from 'ngx-permissions';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token: string | null = null;
  private tokenKey = 'auth_token';
  private roleKey = 'userRole';
  private isAuthenticated: boolean = false;
  private userRole: string = '';

  constructor(
    private http: HttpClient,
    private router: Router,
    private permissionsService: NgxPermissionsService
  ) { }

  register(user: IUser): Observable<any> {
    return this.http.post('api/auth/register', user);
  }

  loginUser(email: string, password: string): Observable<any> {
    return this.http.post<{ token: string, role: string }>('api/auth/login', { email, password }).pipe(
      map(response => {
        this.token = response.token;
        this.isAuthenticated = true;
        this.userRole = response.role;
        localStorage.setItem(this.tokenKey, this.token);
        localStorage.setItem(this.roleKey, this.userRole);
        this.permissionsService.loadPermissions([this.userRole]);
        return response;
      })
    );
  }
  getRole() {
    return localStorage.getItem(this.roleKey)
  }
  logout(): void {
    this.token = null;
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.roleKey);
    this.router.navigate(['auth/login']);
  }

  getToken(): string | null {
    return this.token;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated, !!this.token;
  }

  getHeaders(): HttpHeaders {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });
    return headers;
  }



}
