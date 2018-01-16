import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm: FormGroup;
  errorMessage: string;
  returnUrl: string;

  @ViewChild('emailFeedback') emailFeedback;

  constructor(private router: Router, private formBuilder: FormBuilder) {

    this.loginForm = formBuilder.group({
      'email' : [null, Validators.required],
      'password': [null, Validators.required],
    });

    this.loginForm.valueChanges.subscribe(data => {
      this.handleFormValueChanges(data);
    })
  }

  handleFormValueChanges(data: any) {
    this.errorMessage = '';
    let emailClassName = this.emailFeedback.nativeElement;
    if (data.email && data.email.endsWith('@gmail.com')) {
      emailClassName.className = 'form-control-feedback glyphicon glyphicon-ok';
    } else {
      emailClassName.className = 'form-control-feedback glyphicon glyphicon-remove';
    }
  }

  ngOnInit() {
    this.returnUrl = "dashboard";
    this.errorMessage = '';
  }

  login(formValue: any) {
    
  }

  handleSuccess(res: any) {
    this.errorMessage = '';
    localStorage.setItem('currentUser', JSON.stringify(res.entity));
    this.router.navigate([this.returnUrl]);    
  }

  handleError(err: any) {
    if (localStorage.getItem('currentUser')) {
      localStorage.removeItem('currentUser');
    }
    this.errorMessage = err.message;
  }
}
