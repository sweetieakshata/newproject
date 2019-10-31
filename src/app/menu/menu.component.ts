import { Component, OnInit } from '@angular/core';
import { OrganizationdataService } from '../organizationdata.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  colorData: any;
  email:string;
  password:string;
  constructor(private _userdata:OrganizationdataService){
    this.colorData = [{
      bgColor:'#ffffff',
      fgColor:'#000000'
    },{
      bgColor:'#c6ae71',
      fgColor:'#182618'
    },{
      bgColor:'#937427',
      fgColor:'#c7e0c7'
    },{
      bgColor:'#4c3e1d',
      fgColor:'#c7e0c7'
    },
  ]
  }
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
