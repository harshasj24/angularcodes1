import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'mark1';
  val = 'harsha';
  isVal: boolean = false;
  word: any;
  no: boolean = false;
  bool: boolean = false;

  yas() {
    if (this.word === 'yash' || this.word === 'YASH') {
      this.bool = true;
      this.no = false;
    } else {
      this.bool = false;
      this.no = true;
    }
  }

  toggle() {
    this.isVal = !this.isVal;
  }
  users = [
    { name: 'virat', age: 40 },
    { name: 'dhoni', age: 45 },
    { name: 'sachin', age: 50 },
    { name: 'rohit', age: 42 },
  ];
  selectedcountry = 'ind';
}
