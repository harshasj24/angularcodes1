import {
  Component,
  OnInit,
  DoCheck,
  ViewChild,
  ElementRef,
  AfterContentInit,
  ViewChildren,
  QueryList,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent
  implements OnInit, DoCheck, AfterViewChecked, AfterViewInit
{
  flag: boolean = false;
  result: any;
  fun: any;
  constructor() {
    console.log('parent constructor was called');
  }
  @ViewChild('header', { static: true }) elem: ElementRef;
  // @ViewChildren('header') elem: QueryList<any>;
  toggle() {
    this.flag = !this.flag;
  }
  ngOnInit(): void {
    console.log('parent oninit was called');
  }
  ngDoCheck(): void {
    console.log('docheck was triggred');
  }
  // salesProducts = [
  //   { name: 'mobile', price: 1000 },
  //   { name: 'laptop', price: 25000 },
  //   { name: 'telivision', price: 30000 },
  //   { name: 'printer', price: 9000 },
  // ];
  // salesbooks = [
  //   { name: 'book1', price: 1000 },
  //   { name: 'book2', price: 2000 },
  //   { name: 'book3', price: 5000 },
  //   { name: 'book4', price: 500 },
  // ];

  // sites = ['amazon', 'flipcart', 'myntra', 'ajio'];
  ng(): void {
    console.log('parent  ngAfterContentInit was called');

    // this.elem.nativeElement.innerHTML = '<a href="">harsha</a>';
  }
  ngAfterViewInit(): void {
    console.log('junglee', this.elem);
    this.fun = () => {
      this.elem.nativeElement.innerHTML = 'testYantra';
    };
  }
  ngAfterViewChecked(): void {
    this.fun = () => {
      this.elem.nativeElement.innerHTML = 'hello';
    };
  }
}
