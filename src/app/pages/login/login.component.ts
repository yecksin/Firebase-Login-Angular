import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserModel } from '../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: UserModel

  constructor() { 
    this.user = new UserModel();   
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
