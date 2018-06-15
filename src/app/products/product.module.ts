import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product/product.component';
import { ProductCodePipe } from './product-code.pipe';
import { SharedModule } from '../shared.module';
import { NewProductComponent } from './new-product.component';

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule  
  ],
  declarations: [ // Declaration for use in product module only
    ProductComponent,
    ProductCodePipe,
    NewProductComponent,
    
  ],
  exports:[
    ProductComponent,
    ProductCodePipe,
    SharedModule,
    NewProductComponent
  ]
})
export class ProductModule { }
