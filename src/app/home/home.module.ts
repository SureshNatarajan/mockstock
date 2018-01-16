import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [ CommonModule ],
  exports: [ HomeComponent, DashboardComponent ],
  declarations: [ HomeComponent, DashboardComponent ]
})
export class HomeModule { }
