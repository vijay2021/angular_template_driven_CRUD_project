import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { UsersService } from './users.service';
import { Router } from '@angular/router';
import { SelectivePreloadingStrategyService } from '../selective-preloading-strategy.service';


import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-dt';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  modules: string[];
  sessionId: Observable<string>;

  users:any[];
  dataTable: any;

  constructor(private userService:UsersService, private chRef: ChangeDetectorRef, private router:Router,
    preloadStrategy: SelectivePreloadingStrategyService) {
    this.modules = preloadStrategy.preloadedModules;
   }

  ngOnInit() {

      this.userService.getUsersData().subscribe((data:any[])=>{
            //console.log(data);
            this.users = data;
            this.chRef.detectChanges();

            const table: any = $('table');
            this.dataTable = table.DataTable();
      });

  }


  onDeleteUser(id:number){
    this.userService.deleteUser(id).subscribe((data:any)=>{
      //console.log(data);
      if(data=='1'){
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
        this.router.navigate(["users"]));
      }
    });
  }

}
