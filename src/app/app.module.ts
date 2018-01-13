import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module'
import { MemberModule } from './member/member.module';
import { ReactiveFormsModule } from '@angular/forms';

import { StockSuggestionsModule } from './stock-suggestions/stock-suggestions.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HomeModule,
    MemberModule,
    StockSuggestionsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
