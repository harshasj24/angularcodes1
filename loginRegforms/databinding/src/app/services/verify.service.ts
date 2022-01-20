import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VerifyService {
  regmail = localStorage.getItem('email');
  regpass = localStorage.getItem('pass');
  loginMail = localStorage.getItem('loginMail');
  loginPass = localStorage.getItem('loginpass');

  verify() {
    if (this.regmail === this.loginMail && this.regpass === this.loginPass) {
      return true;
    } else {
      return false;
    }
  }

  constructor() {}
}
