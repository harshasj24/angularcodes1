import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  OnChanges,
  SimpleChanges,
  ContentChild,
  ElementRef,
  AfterContentInit,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent
  implements OnInit, OnDestroy, OnChanges, AfterContentInit
{
  @Input() result: any;

  flag: boolean = true;
  counter: number = 0;
  interval: any;
  @ContentChild('cheader', { static: true }) elem: any;
  constructor() {
    console.log('child constructor was called');
  }

  ngOnInit(): void {
    // this.interval = setInterval(() => {
    //   this.counter++;
    //   console.log(this.counter);
    // }, 1000);
    console.log('child oninit was called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes was made');
    console.log(changes);
  }

  ngOnDestroy(): void {
    console.log('child componnet was destroyed');
    clearInterval(this.interval);
  }
  ngAfterContentInit(): void {
    console.log(this.elem);
  }
}
