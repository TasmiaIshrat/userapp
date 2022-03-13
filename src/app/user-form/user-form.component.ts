import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"

import {FormGroup,FormControl,Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})


export class UserFormComponent implements OnInit {

  userCreateForm = new FormGroup({

    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required),
    gender: new FormControl('Male',Validators.required),
    dateOfBirth: new FormControl(Validators.required),
    city: new FormControl(''),
    phone: new FormControl('',Validators.required),
    email: new FormControl('',Validators.email),



  })

  minDate: Date;

  maxDate: Date;

  constructor(private http: HttpClient, private router: Router) { 

    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 100, 0, 1);
    this.maxDate = new Date(new Date().toISOString());
  }

  ngOnInit(): void {

  }


  get firstName(){
    return this.userCreateForm.get('firstName');
  }
  get lastName(){
    return this.userCreateForm.get('lastName');
  }
  get email(){
    return this.userCreateForm.get('email');
  }
  get phone(){
    return this.userCreateForm.get('phone');
  }

  submitForm(){

    if(this.userCreateForm.valid){

        var formData: any = new FormData();

        formData.append("firstName", this.userCreateForm.value.firstName);

        formData.append("lastName", this.userCreateForm.value.lastName);
        
        formData.append("gender", this.userCreateForm.value.gender);

        formData.append("dateOfBirth", this.userCreateForm.value.dateOfBirth);

        formData.append("city", this.userCreateForm.value.city);
        
        formData.append("phone", this.userCreateForm.value.phone);

        formData.append("email", this.userCreateForm.value.email);
        
        this.http.post('https://tasmiaishrat.pythonanywhere.com/registerUser', formData).subscribe(
          (response) => console.log(response+'Done:::'),
          (error) => console.log(error)
        )
      

        this.router.navigate(['userlist']);
      
    
    }

  }

}
