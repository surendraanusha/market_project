import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes } from '@angular/router';
import { MarketsComponent } from '../markets/markets.component';
import { MarketInfoComponent } from '../market-info/market-info.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
 {path:'',component:MarketsComponent},
  
    {
      path:':id', component: MarketInfoComponent
    }

];
@NgModule({
  declarations: [
    MarketsComponent,
    MarketInfoComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatCardModule,
    [RouterModule.forChild(routes)]
  ],
  exports:[RouterModule]
})
export class AuthenticateModule { }
