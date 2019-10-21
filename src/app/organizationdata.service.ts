import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrganizationdataService {
  redirectURL: any;
  currentUser: { user_email: string; password: string; isAdmin: boolean; };
  _router: any;

  constructor(private http:HttpClient) { }

  url:string ='https://3df52e24.ngrok.io/api/Settings/GetDesignations';
  url2:string='https://3df52e24.ngrok.io/api/Settings/InsUpdateDesignation';
 url3:string='https://3df52e24.ngrok.io/api/Settings/DeleteDesignation?DesignationId=';

 getAllOrganizations(){
  return this.http.get(this.url);
}

addOrganization(item){
  let head = new HttpHeaders().set("Content-Type","application/json");
  let body = JSON.stringify(item);
  return this.http.post(this.url2,body,{headers:head});

}
editOrganization(item:any){
  let head = new HttpHeaders().set("Content-Type","application/json");
  let body = JSON.stringify(item);
  return this.http.post(this.url2,body,{headers:head});
}
deleteOrganization(DesignationId){
  let head = new HttpHeaders().set("Content-Type","application/json");
  return this.http.post(this.url3+DesignationId,{headers:head});
 }

 login(user_email: string, user_password: string) {
  if (user_email == "admin" && user_password == "1234") {
    this.currentUser = {
      user_email: user_email,
      password: user_password,
      isAdmin: true
    };
    return;
  }
  this.currentUser = {
    user_email: user_email,
    password: user_password,
    isAdmin: false
  };
}
logout() {
  this.currentUser = null;
  this.redirectURL = "";
  this._router.navigate(["/home"]);
}
get isLoggedIn(): boolean {
  return !!this.currentUser;
}

}

