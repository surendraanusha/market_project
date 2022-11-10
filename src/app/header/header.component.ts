import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  loggedIn:any;

  ngOnInit(): void {
    if(localStorage.getItem('userName') != null){
      this.loggedIn = true;
    }
    else{
      this.loggedIn = false;
    }
  }
  signOut(){
    localStorage.removeItem('userName')
    localStorage.removeItem('password')
    localStorage.removeItem('role')
    this.router.navigate(['/login'])
  }

}
