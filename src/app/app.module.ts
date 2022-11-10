import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GettingDataService } from './getting-data.service';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { BodyComponent } from './body/body.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AuthenticateModule } from './authenticate/authenticate.module';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { NotFundComponent } from './not-fund/not-fund.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MarketFormComponent } from './market-form/market-form.component';
@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    HeaderComponent,
    AuthenticationComponent,
    NotFundComponent,
    MarketFormComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatButtonToggleModule,
    AuthenticateModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [GettingDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
