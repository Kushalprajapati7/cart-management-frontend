import { Component, OnInit } from '@angular/core';
import { IProfile } from 'src/app/core/interface/profileInterface';
import { ProfileService } from 'src/app/core/services/profile.service';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.scss']
})
export class ProfileListComponent implements OnInit {
  allProfile:IProfile[]=[];

  constructor(
    private profileService:ProfileService
  ){}

  ngOnInit(): void {
    this.loadAllProfiles();
  }

  loadAllProfiles(){
    this.profileService.allProfile().subscribe(
      (data:IProfile[])=>{
        console.log(data);
        
        this.allProfile=data
      },
      (error)=>{
        console.error(error)  
      }
    )
  }

  editProfile(profile:IProfile){}
  deleteProfile(profile:IProfile){}
}
