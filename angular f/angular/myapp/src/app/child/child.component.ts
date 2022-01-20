import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input() valueChild: any;
  constructor() {}

  ngOnInit(): void {}

  resu: any;
  col: any;
  rev() {
    let re: any = ' ';
    for (let i = this.resu.length - 1; i >= 0; i--) {
      re += this.resu[i];
    }
    console.log(re);
  }
}
