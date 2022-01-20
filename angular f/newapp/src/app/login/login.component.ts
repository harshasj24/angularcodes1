import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    mail: new FormControl('', [Validators.required, Validators.email]),
    pass: new FormControl('', [
      Validators.required,
      Validators.pattern('/^(?=.*[A-Za-z])(?=.*d)[A-Za-zd!$%@#£€*?&]'),
    ]),
    check: new FormControl('', [Validators.required]),
  });
  get mail() {
    return this.loginForm.get('mail');
  }
  get pass() {
    return this.loginForm.get('pass');
  }
  get check() {
    return this.loginForm.get('check');
  }
  login() {
    console.log(this.loginForm.value);
  }

  constructor() {}

  ngOnInit(): void {}
}
