import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {SessionManager } from '../Session/session.local-storage';
import { LogInService } from './log-in.service';


@Component({
  selector: 'app-comp-log-in',
  templateUrl: './comp-log-in.component.html',
  styleUrls: ['./comp-log-in.component.css']
})
export class CompLogInComponent implements OnInit {
  loginForm: FormGroup;
  isValid: boolean;


  constructor(
    private formBuilder: FormBuilder,
    private loginService: LogInService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit(){
    this.isValid = this.loginForm.valid;
    this.loginService.LogIn(this.loginForm.value.username, this.loginForm.value.password)
    .subscribe( result => SessionManager.store(result['_body']));
  }
}
