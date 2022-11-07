import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticatedGuard } from './authenticated.guard';
import { AuthenticationComponent } from './authentication/authentication.component';
import { BodyComponent } from './body/body.component';
import { ContactComponent } from './contact/contact.component';
import { NotFundComponent } from './not-fund/not-fund.component';

const routes: Routes = [
  {path:'login',component:AuthenticationComponent},
  {path:'',component:BodyComponent},
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
