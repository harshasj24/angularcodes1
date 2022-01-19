import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app2';
  constructor() {}

  users = [
    {
      names: 'naveen',
      city: 'banglore',
      id: '1234',
      salary: 2000,
      DOB: new Date('2 /jul/ 1998'),
    },
    {
      names: 'srinivas',
      city: 'hassan',
      id: '1235',
      salary: 2000,
      DOB: new Date('2 /jul/ 2025'),
    },
    {
      names: 'harsha',
      city: 'thumkur',
      id: '1236',
      salary: 2000,
      DOB: new Date('2 /jul/ 1986'),
    },
    {
      names: 'hareesha',
      city: 'heggere',
      id: '1237',
      salary: 2000,
      DOB: new Date('2 /jul/ 1985'),
    },
    {
      names: 'shankar',
      city: 'turvekere',
      id: '1238',
      salary: 2000,
      DOB: new Date('2 /jul/ 1984'),
    },
  ];
}
