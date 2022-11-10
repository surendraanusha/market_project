import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GettingDataService } from '../getting-data.service';
import { faPen,faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-markets',
  templateUrl: './markets.component.html',
  styleUrls: ['./markets.component.scss']
})
export class MarketsComponent implements OnInit{
  faPen = faPen;
  faDeleteLeft = faDeleteLeft;
  marketArray:any;
  marketObject:any;
  userType:any=false;

  constructor(private getService:GettingDataService,
              private router:Router,
              ) {}

  ngOnInit(): void {
    if(localStorage.getItem('role')==='admin'){
      this.userType = true
    }
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

  deleteMarket(data:any){
    delete this.getService.getMarketsInfo()[data]
    this.getService.getMarketsInfo().keys
    .splice(this.getService.getMarketsInfo().keys.indexOf(data),1) 
  }

  editMarketInfo(market:any){
    let result = this.getService.getMarketsInfo()[market]['id']
    this.router.navigateByUrl(`/edit-market/${result}`)
  }

}
