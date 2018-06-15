import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators, FormGroup,FormControl } from '@angular/forms';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  productDetailForm = new FormGroup ({});
  constructor(private fb: FormBuilder) { // <--- inject FormBuilder
    this.createForm();
  }
  createForm() {
    this.productDetailForm = this.fb.group({
      product_name: ['', Validators.required ],
      price: ['', Validators.required ],
    });
  }

  addProduct(name, price) {
    console.log('name : '+name+' price : '+price)
}

  ngOnInit() {
  }
  /*
  productdetailForm = new FormGroup ({
    name: new FormControl()
  });

  constructor(private fb: FormBuilder) { 
    this.createForm();
  }
  product_name;
  price;

  createForm() {
    console.log(' CREATE FORM ');

    this.productdetailForm = this.fb.group({
      product_name:'',
      price:''  // <--- the FormControl called "name"
    });
  }
*/



}
