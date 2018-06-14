import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product/product.component';
import { ProductCodePipe } from './product-code.pipe';
import { SharedModule } from '../shared.module';

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule  
  ],
  declarations: [ // Declaration for use in product module only
    ProductComponent,
    ProductCodePipe
  ],
  exports:[
    ProductComponent,
    ProductCodePipe,
    SharedModule
  ]
})
export class ProductModule { }
