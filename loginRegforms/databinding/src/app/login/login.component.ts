import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  flag: boolean = false;
  type: any = 'password';
  arr: any = [];

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
  cregmail = localStorage.getItem('email');
  cregpass = localStorage.getItem('pass');
  cloginMail = localStorage.getItem('loginMail');
  cloginPass = localStorage.getItem('loginpass');

  login() {
    if (
      this.cregmail === this.cloginMail &&
      this.cregpass === this.cloginPass
    ) {
      this.router.navigate(['Dashbord']);
    } else {
      alert('invalid');
    }

    //     console.log(this.mail?.value);
    if (this.mail?.value && this.pass?.value) {
      localStorage.setItem('loginMail', this.mail?.value);
      localStorage.setItem('loginpass', this.pass?.value);
    }
    this.arr.push({ name: this.mail?.value });
    localStorage.setItem('names', JSON.stringify(this.arr));
  }

  ngOnInit(): void {}
}
