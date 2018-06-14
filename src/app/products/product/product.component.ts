import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
  products = [{
    "id": 1,
    "name": "PS4",
    "price": 85.50,
    "tags": ["home", "green"]
},
{
  "id": 2,
  "name": "XBox",
  "price": 99.50,
  "tags": ["home", "green"]
},
{
  "id": 3,
  "name": "God of War4",
  "price": 20.50,
  "tags": ["home", "green"]
}]
  ngOnInit() {
  }

}
