import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  langs = ['English','Thai'];
  selectedLang : string;
  selectLang(){
    console.log('LANG : '+this.selectedLang)
  }
  constructor() {
    this.selectedLang='English';
   }

  ngOnInit() {
  }

}
