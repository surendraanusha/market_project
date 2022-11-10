import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticatedGuard } from './authenticated.guard';
import { AuthenticationComponent } from './authentication/authentication.component';
import { BodyComponent } from './body/body.component';
import { ContactComponent } from './contact/contact.component';
import { MarketFormComponent } from './market-form/market-form.component';
import { NotFundComponent } from './not-fund/not-fund.component';

const routes: Routes = [
  {path:'login',component:AuthenticationComponent},
  {path:'',component:BodyComponent},
  {path:'add-market',component:MarketFormComponent},
  {path:'edit-market/:id',component:MarketFormComponent},
  {path:'market',
    loadChildren:() => import('./authenticate/authenticate.module').
    then(m=>m.AuthenticateModule),
  },
  {path:'bookings',component:ContactComponent,canActivate:[AuthenticatedGuard]},
  {path:'**',component:NotFundComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
