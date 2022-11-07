import { Component, OnInit,Input } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { GettingDataService } from '../getting-data.service';
@Component({
  selector: 'app-market-info',
  templateUrl: './market-info.component.html',
  styleUrls: ['./market-info.component.scss']
})
export class MarketInfoComponent implements OnInit {

  constructor(private getService: GettingDataService,
        private router:Router,private activated:ActivatedRoute) { }
  
  marketObj:any;
  minDate=new Date()
  product_id:any;
  ngOnInit(): void {
   this.activated.paramMap.subscribe(data=>{this.product_id = data.get('id')})
   let specialOne = this.getService.getMarketsInfo().keys[this.product_id-1];
    this.marketObj = this.getService.getMarketsInfo()[`${specialOne}`];
  }
  
  authentication(){
    if(localStorage.getItem('userName') === null){
      this.router.navigate(['/login'])     
    }
  }



  

}
