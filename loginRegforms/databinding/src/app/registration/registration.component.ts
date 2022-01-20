import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  flag: boolean = false;
  type: any = 'password';
  eyeClass: any = 'far fa-eye';
  loginForm = new FormGroup({
    mail: new FormControl('', [Validators.required, Validators.email]),
    pass: new FormControl('', [
      Validators.required,
      Validators.pattern('[A-Za-z0-9]+$'),
    ]), 
  });
  get mail() {
    return this.loginForm.get('mail');
  }
  get pass() {
    return this.loginForm.get('pass');
  }
  hideShow() {
    if (this.type === 'password') {
      this.type = 'text';
      this.eyeClass = 'far fa-eye-slash';
    } else {
      this.type = 'password';
      this.eyeClass = 'far fa-eye';
    }
  }
  login() {
    localStorage.setItem('email', this.mail?.value);
    localStorage.setItem('pass', this.pass?.value);
  }

  constructor() {}

  ngOnInit(): void {}
}
