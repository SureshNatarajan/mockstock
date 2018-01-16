import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { appRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module'
import { MemberModule } from './member/member.module';
import { StockSuggestionsModule } from './stock-suggestions/stock-suggestions.module';
import { NavbarModule } from './navbar/navbar.module';
import { SettingsModule } from './settings/settings.module';
import { LoginModule } from 'app/login/login.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    LoginModule,
    HomeModule,
    NavbarModule,
    SettingsModule,
    MemberModule,
    StockSuggestionsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
