import { Component, OnInit, NgModule } from '@angular/core';
import { User } from '../user';
import { Router, ActivatedRoute,Params  } from "@angular/router";
import { UsersService } from '../users.service';
import 'rxjs/Rx';
import { NgForm }   from '@angular/forms';

@Component({
  selector: 'app-user-add-edit',
  templateUrl: './user-add-edit.component.html',
  styleUrls: ['./user-add-edit.component.css']
})
export class UserAddEditComponent implements OnInit {
  user = new User('','','','','','');
  id;
  formValue: any;

  constructor(private route: ActivatedRoute, private usersService:UsersService, private router:Router) {}

    countries = ['United States','Canada','Costa Rica','India'];

    ngOnInit() {

        this.route.firstChild.params.subscribe(params => {
          this.id = params['id'];
           if(this.id>0){

             this.usersService.getUserData(this.id).subscribe((data:any) =>{
              data = data['0'];
              this.user = new User(data.name,data.city,data.state,data.country,data.pincode,data.status);
            });

          }
        });

    }




    submitted = false;
    onSubmit(form:NgForm) {
      this.submitted = true;
      this.formValue = form.value;
      if(this.id>0){
        console.log(this.id);
        this.usersService.updateUserData(this.id,this.formValue).subscribe((data:any)=>{
          //console.log(data);
          if(data=='1'){
            this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
            this.router.navigate(["users"]));
          }
        });
      }else{
        this.usersService.insertUserData(this.formValue).subscribe((data:any)=>{
          //console.log(data);
          if(data=='1'){
            this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
            this.router.navigate(["users"]));
          }
        });
      }


    }





}
