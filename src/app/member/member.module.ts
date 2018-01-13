import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MemberComponent } from './member.component';
import { MemberService } from './member.service';

@NgModule({
  imports: [ CommonModule, ReactiveFormsModule ],
  exports: [ MemberComponent ],
  providers: [ MemberService ],
  declarations: [ MemberComponent ]
})
export class MemberModule { }
