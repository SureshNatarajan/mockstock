import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Observable } from 'rxjs/Observable';

import { MemberService } from '../member/member.service';
import { Member } from '../modal/member';


@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  
  memberForm: FormGroup;
  member: Member;
  memberListObservable: Observable<any>;

  constructor(private fb: FormBuilder, 
              private memberService: MemberService) {
    this.createMemberAddForm();
  }

  ngOnInit() {
    this.member = new Member();
    this.getAllMembers();
  }

  createMemberAddForm() {
    this.memberForm = this.fb.group({
      memberName: ['', Validators.required],
      memberMobileNumber: ['', Validators.required], 
      emailId: ['', Validators.required],
      referredBy: '',
      joinedOn: '',
      lastMessagedOn: ''
    });
  }

  onSubmit() {
    this.member.memberName = this.memberForm.value.memberName;
    this.member.memberMobileNumber = this.memberForm.value.memberMobileNumber;
    this.member.emailId = this.memberForm.value.emailId;
    this.member.referredBy = this.memberForm.value.referredBy;
    this.member.joinedOn = this.memberForm.value.joinedOn;
    this.member.lastMessagedOn = this.memberForm.value.lastMessagedOn;
    this.memberService.createMember(this.member)
                      .subscribe(item => {
                        this.memberForm.reset();
                        this.getAllMembers();
                      });
  }

  getAllMembers() {
    this.memberListObservable = this.memberService.retrieveAllMembers();
  }
}
