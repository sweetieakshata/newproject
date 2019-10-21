import {Routes,RouterModule} from '@angular/router'
import { OrganizationComponent } from './organization/organization.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { UserGuardService } from './user-guard.service';
import { CheckboxtableComponent } from './checkboxtable/checkboxtable.component';
import { StaticmultipledeleteComponent } from './staticmultipledelete/staticmultipledelete.component';
// import { SidebarComponent } from './sidebar/sidebar.component';




const arr : Routes=[
  {path:'',component:LoginComponent},
  {path:'home',canActivate:[UserGuardService],component:HomeComponent},
  {path:'org',canActivate:[UserGuardService],component:OrganizationComponent},
  {path:'abt',canActivate:[UserGuardService],component:AboutComponent},
  {path:'list',canActivate:[UserGuardService],component:ListComponent},
  {path:'check',canActivate:[UserGuardService],component:CheckboxtableComponent},
  {path:'static',component:StaticmultipledeleteComponent}




  // {path:'side',component:SidebarComponent}





  // {path:'**',redirectTo:'/pagenotfound'}
];

export const routing=RouterModule.forRoot(arr);
