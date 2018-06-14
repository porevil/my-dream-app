import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { ProductService } from './products/product.service';
import { CoreRoutingModule } from './core-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    HttpClientModule
  ],
  declarations: [],
  providers:[ProductService,HttpClient]
})
export class CoreModule { }
