import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css'],
})
export class AboutusComponent implements OnInit {
  result: any;
  starting: string = 'TY';
  final: any = '';
  rand: any;
  depart = ['DEVELOPMENT', 'TESTING'];
  depRand: any = Math.floor(Math.random() * 2);
  randDe = this.depart[this.depRand];
  dep: any = '';

  func() {
    for (let i = 0; i < 3; i++) {
      this.starting += this.result[i].toUpperCase();
      // this.final = this.starting.toUpperCase();
    }

    this.rand = Math.floor(Math.random() * 899 + 100);
    for (let i = 0; i < 3; i++) {
      this.dep += this.randDe[i];
    }

    this.final += this.starting + this.dep + this.rand;
  }

  constructor() {}

  ngOnInit(): void {}
}
