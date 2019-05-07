import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserAddressComponent } from './users/user-address/user-address.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserAddEditComponent } from './users/user-add-edit/user-add-edit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'users', component: UsersComponent , canActivate: [AuthGuard]},
  { path: 'user-action', component: UserAddEditComponent, children:[
    { path: 'edit/:id', component: UserAddEditComponent },
    { path: 'new', component: UserAddEditComponent },
  ]},
  { path: 'userAddress', component: UserAddressComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes,
      {
        enableTracing: false, // <-- debugging purposes only
        preloadingStrategy: SelectivePreloadingStrategyService,
      }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
