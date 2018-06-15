import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { CoreModule } from './core.module';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductModule } from './products/product.module';
import { NewProductComponent } from './products/new-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './products/product/product.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    ProductDetailComponent,

  ],
  imports: [
    BrowserModule,CoreModule,ProductModule,ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'', pathMatch:'full',redirectTo:'products'    },
      {path:'products', component:ProductComponent    },
      {path:'products/new', component:NewProductComponent    },
      {path:'products/detail', component:ProductDetailComponent    },
      {path:'**', pathMatch:'full',redirectTo:'products'    }
  ])
  ],
  providers: [], // remove ProductService to coreModule
  bootstrap: [HeaderComponent,ContentComponent,FooterComponent]
})
export class AppModule { }
