import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ProductService } from '../products/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private productService:ProductService,
  private router:Router) { }

  ngOnInit() {
  }
  ngOnChanges(change: SimpleChanges){

  }
  goToNewProductPage(e){
    this.router.navigate(['/products']);
    e.preventDefault();
  }

  selectMenu(menuItem:number){
    this.productService.setSelectedMenu(menuItem);
    console.log('set seletedMenu'+menuItem);
    
  }

}
