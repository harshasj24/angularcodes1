import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'myapp';
  val1 = 'harsha';
  displayResult: string = '';
  isSpecial: boolean = true;
  c1 = 'red';
  c2 = 'green';
  cssClass = '';
  isValid: boolean = true;
  tex = 'text';
  pas = 'password';
  colVal = 2;
  display() {
    let dum = document.getElementById('dum')?.innerText;
    dum = 'hello';
    console.log('inside');
  }
}
