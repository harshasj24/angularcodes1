import { Component, OnDestroy, OnInit } from '@angular/core';
// import { count } from 'console';
import { Observable, observable, Subscription, Unsubscribable } from 'rxjs';

@Component({
  selector: 'app-usercomponent',
  templateUrl: './usercomponent.component.html',
  styleUrls: ['./usercomponent.component.css'],
})
export class UsercomponentComponent implements OnInit, OnDestroy {
  constructor() {}

  interval: any;
  private mySub: Subscription;
  count: number = 0;
  min: number = 0;
  val1: any = 'Pause';
  paPly() {
    if (this.val1 === 'Pause') {
      let temp = this.count;

      clearInterval(this.interval);
      this.count = temp;
      this.val1 = 'play';
    } else {
      this.val1 = 'Pause';
      this.interval = setInterval(() => {
        this.count++;
        if (this.count > 60) {
          this.count = 0;
          this.min++;
        }
      }, 1000);
    }
  }
  ngOnInit(): void {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve('data1 in promices');
      }, 1000);
    });
    // listining to promices
    promise.then((result) => {
      console.log(result);
    });

    const observe = new Observable((sub) => {
      console.log('data inside observable');
      this.interval = setInterval(() => {
        sub.next(this.count++);
        if (this.count > 60) {
          this.count = 0;
          this.min++;
        }
      }, 1000);
    });

    this.mySub = observe.subscribe((result) => {});
  }
  ngOnDestroy(): void {
    console.log('destroyed');

    this.mySub.unsubscribe();
    // clearInterval(this.interval);
  }
}
