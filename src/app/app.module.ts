import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { CounterComponent } from './counter/counter.component';
import { ProductComponent } from './products/product/product.component';
import { ProductCodePipe } from './products/product-code.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    CounterComponent,
    ProductComponent,
    ProductCodePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ContentComponent]
})
export class AppModule { }
