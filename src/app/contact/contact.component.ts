import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GettingDataService } from '../getting-data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private router:Router,private getService:GettingDataService) { }
  bookArray:any=[];

  ngOnInit(): void {
    if(localStorage.getItem('userName') === null){
      this.router.navigate(['/login'])     
    }
    this.bookArray = this.getService.bookedMarketsArray
    console.log(this.bookArray)
    for(let me of this.bookArray){
      console.log(me.marketData.imageUrl)
      console.log(me.bookDate)
    }
  }

}
