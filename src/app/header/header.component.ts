import { Component, OnInit } from '@angular/core';
import { ProductService } from '../products/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private productService:ProductService) { }

  ngOnInit() {
  }

  selectMenu(menuItem:number){
    this.productService.setSelectedMenu(menuItem);
    console.log('set seletedMenu'+menuItem);
    
  }

}
