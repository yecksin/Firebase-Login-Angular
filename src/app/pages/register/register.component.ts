import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserModel } from '../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: UserModel

  constructor() { 
    this.user = new UserModel();   
    this.user.email = 'yecksin@gmail.com';

  }

  ngOnInit(): void {
    
  }

  onSubmit(form:NgForm){

    if (form.invalid) { return; }
    console.log(form);
    console.log(form.valid);
    console.log(this.user);

  }

}
