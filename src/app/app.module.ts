import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {ReactiveFormsModule} from '@angular/forms'


import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { UserFormComponent } from './user-form/user-form.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { AppLayoutComponent } from './app-layout/app-layout.component';



@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    UsersComponent,
    AppLayoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
  
  ],
  exports: [
    
 
],
  providers: [
    MatNativeDateModule,
    MatDatepickerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
