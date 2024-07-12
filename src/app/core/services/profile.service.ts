import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProfile } from '../interface/profileInterface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private http: HttpClient
  ) { }

  allProfile(): Observable<IProfile[]> {
    return this.http.get<IProfile[]>('api/profile/showProfiles')
  }
}
