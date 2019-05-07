import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient,private httpNew: Http) { }

  // all users data
  getUsersData(){
    return this.http.get('https://yourwebserviceurl.com/login/frontService.php?postuser&getUsers');
  }

  //single user dataTable
  getUserData(userId:number){
    return this.http.get('https://yourwebserviceurl.com/login/frontService.php?postuser&getUsers&useridData='+userId);
  }

  insertUserData(usersData:String){
    //console.log(usersData);
  return this.http.post<any>('https://yourwebserviceurl.com/login/frontService.php?postuser&insert',usersData,{responseType: 'json'});
  }


  updateUserData(id:number,usersData:String){
    //alert(id);
    console.log('https://yourwebserviceurl.com/login/frontService.php?postuser&usertId='+id);
    return this.http.post<any>('https://yourwebserviceurl.com/login/frontService.php?postuser&usertId='+id,usersData,{responseType: 'json'});
  }

  deleteUser(id:number){
    return this.http.post<any>('https://yourwebserviceurl.com/login/frontService.php?postuser&deleteId='+id,{responseType: 'json'});
  }


}
