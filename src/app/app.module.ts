import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { CoreModule } from './core.module';
import { ProductModule } from './products/product.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
  ],
  imports: [
    BrowserModule,CoreModule,ProductModule
  ],
  providers: [], // remove ProductService to coreModule
  bootstrap: [HeaderComponent,ContentComponent,FooterComponent]
})
export class AppModule { }
