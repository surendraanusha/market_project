import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GettingDataService } from '../getting-data.service';

@Component({
  selector: 'app-markets',
  templateUrl: './markets.component.html',
  styleUrls: ['./markets.component.scss']
})
export class MarketsComponent implements OnInit{

  marketArray:any;
  marketObject:any

  constructor(private getService:GettingDataService,
              private router:Router,
              ) {}

  ngOnInit(): void {
    if(localStorage.getItem('userName') === null){
      this.router.navigate(['/login'])     
    }
    this.marketArray = this.getService.getMarketsInfo()
    
  }

  addMe(market:any){
    let createMarketId = this.marketArray[market].id
    this.marketObject = this.marketArray[market]
    this.getService.marketDetailsObj = this.marketObject
    this.router.navigate([`market/${createMarketId}`])
  }

}
