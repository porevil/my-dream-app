import { Component, OnInit, ViewChild } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }
  message:string;
  @ViewChild(CounterComponent) counter:CounterComponent ;

  update(e){
    this.message = e
    console.log(e);
  }

  ngOnInit() {
    this.message = 'Nothing';
  }

  reset(){
    console.log('reset')
    this.counter.start=0;
  }
}
