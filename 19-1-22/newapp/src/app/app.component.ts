import { Component, OnInit, ɵNoopNgZone } from '@angular/core';

import { Observable, observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // private mySub: any;
  // count: number = 0;
  // min: number = 0;
  flag: boolean = false;
  val: any = 'Start';
  val1:any="Pause"

  toggle() {
    if (this.val === 'Start') {
      this.val = 'Stop';
    } else {
      this.val = 'Start';
    }
    this.flag = !this.flag;
  }
  

  ngOnInit(): void {
    //   const promise = new Promise((resolve) => {
    //     setTimeout(() => {
    //       resolve('data1 in promices');
    //     }, 1000);
    //   });
    //   // listining to promices
    //   promise.then((result) => {
    //     console.log(result);
    //   });
    //   const observe = new Observable((sub) => {
    //     console.log('data inside observable');
    //     setInterval(() => {
    //       this.count++;
    //       if (this.count > 60) {
    //         this.count = 0;
    //         this.min++;
    //       }
    //       console.log(this.count);
    //     }, 1000);
    //   });
    //   this.mySub = observe.subscribe((result) => {
    //     console.log(result);
    //   });
  }

  title = 'newapp';
}
