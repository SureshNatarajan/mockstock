import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  exports:[ LoginComponent ],
  declarations: [ LoginComponent ]
})
export class LoginModule { }
