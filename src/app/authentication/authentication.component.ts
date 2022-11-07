import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { GettingDataService } from '../getting-data.service';


@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  userDetails:any;
  errorMsg=false;
  constructor(private _formBuilder:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.userDetails = this._formBuilder.group({
      username : new FormControl(),
      password : new FormControl(),
      role:new FormControl()
    })
    
  }
  submitData(){
    localStorage.setItem("userName",this.userDetails.value.username)
    localStorage.setItem("password",this.userDetails.value.password)
    localStorage.setItem("role",this.userDetails.value.role)
    this.SingIn()
  }
  checkUserDetails(){
    if(localStorage.getItem('userName') === null && localStorage.getItem('password') === null){
      this.SingUp()
    }
    else if(localStorage.getItem('userName') === this.userDetails.value.username
             && localStorage.getItem('password') === this.userDetails.value.password){
      this.router.navigate(['/'])
    }
    else{
      this.errorMsg = true
    }
    console.log(this.userDetails.value.username)
    console.log(this.userDetails.value.password)
  }
  toggling = false;

  SingUp(){
    if(this.toggling == true){
      this.toggling = !this.toggling
    }
    else{
      this.toggling
    }
  }
  SingIn(){
    if(this.toggling == false){
      this.toggling = !this.toggling
    }
    else{
      this.toggling
    }
  }
}
