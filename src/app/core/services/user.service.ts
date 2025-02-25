import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../interface/userInterface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  allUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>('api/auth/allUsers')
  }


}
