import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Output() message: EventEmitter<string> = new EventEmitter<string>();

  passData() {
    this.message.emit('hello!, i am data inside child');
  }
  deleData() {
    this.message.emit(' ');
  }

  constructor() {}

  ngOnInit(): void {}
}
