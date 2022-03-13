import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { UsersComponent } from './users/users.component';
const routes: Routes = [
  { path: '', redirectTo: '/userlist', pathMatch: 'full' },
  { path: 'userlist', component: UsersComponent },
  { path: 'createuser', component: UserFormComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
