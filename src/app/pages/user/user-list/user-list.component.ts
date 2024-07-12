import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/core/interface/userInterface';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  userList: IUser[] = [];

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.loadAllUser()
  }

  loadAllUser() {
    this.userService.allUsers().subscribe(
      (data: IUser[]) => {
        console.log(data);
        
        this.userList = data
      }, (error) => {
        console.error(error)
      }
    )

  }
  editUser(user:IUser){

  }

  deleteUser(user:IUser){}

}
