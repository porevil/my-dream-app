import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { NewProductComponent } from './new-product.component';

const routes: Routes = [
      {path:'products', component:ProductComponent    },
      {path:'products/new', component:NewProductComponent    },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
