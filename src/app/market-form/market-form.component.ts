import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GettingDataService } from '../getting-data.service';


@Component({
  selector: 'app-market-form',
  templateUrl: './market-form.component.html',
  styleUrls: ['./market-form.component.scss']
})
export class MarketFormComponent implements OnInit {
  marketForm:FormGroup;
  marketObj:object={};
  
  constructor(private fb:FormBuilder,private active:ActivatedRoute,private serviceFile:GettingDataService,private router:Router) {     
    this.marketForm = this.fb.group({
      id:[''],
      marketName:[''],
      marketNumber:[''],
      location:[''],
      imageUrl:[''],
      contact:[''],
      description:['']
    })
  }

  objectId:any;
  ngOnInit(): void {
    this.active.params.subscribe(data=>{this.objectId = data['id']})
    let editObj = this.serviceFile.getMarketsInfo()[`market_${this.objectId}`]
    this.marketForm.patchValue(editObj)
  }

  addMarket(){
    if(this.router.url.split('/').slice(1)[0] === "edit-market"){
      this.serviceFile.getMarketsInfo()[`market_${this.objectId}`] = this.marketForm.value
      this.router.navigate(['/market'])
    }
    else{
      let result = this.serviceFile.getMarketsInfo()
      let myresult = Object.keys(result["keys"]).length + 1;
      let newId = `market_${myresult}`
      let newObj = this.marketForm.value
      newObj.id = myresult
      this.serviceFile.getMarketsInfo()[newId]= newObj;
      result['keys'].push(newId) 
      this.router.navigate(['/market'])
    }
  }

}
