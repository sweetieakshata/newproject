import { Component, OnInit } from '@angular/core';
import { OrganizationdataService } from '../organizationdata.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  email:string;
  password:string;
  constructor(private _userdata:OrganizationdataService){}
   ngOnInit() {
  }
  onLogOut(){
    this._userdata.logout();
  }
  isLoggedIn(){
    return this._userdata.isLoggedIn;
  }

  onsignin(){
    if(this.email=="akshata@gmail.com" &&  this.password=="1234")
    {
      alert("success");
    }

  }


}
