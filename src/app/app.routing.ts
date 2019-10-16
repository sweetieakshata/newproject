import {Routes,RouterModule} from '@angular/router'
import { OrganizationComponent } from './organization/organization.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ListComponent } from './list/list.component';




const arr : Routes=[
  {path:'',component:HomeComponent},
  {path:'org',component:OrganizationComponent},
  {path:'abt',component:AboutComponent},
  {path:'list',component:ListComponent}


  // {path:'sid',component:SideComponent}


  // {path:'**',redirectTo:'/pagenotfound'}
];

export const routing=RouterModule.forRoot(arr);
