import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  @Input() start:number;
  @Output()
  numberChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.start = 1;
  }

  count(){
    this.start = this.start + 10;
    this.numberChange.emit(' Number change '+this.start);

  }

}
