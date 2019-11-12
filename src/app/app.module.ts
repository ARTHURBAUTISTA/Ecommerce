import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { appRouting } from './app.routes';
import { ProductsComponent } from './components/products/products.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { SearchProductComponent } from './components/search-product/search-product.component';
import { InfoProductComponent } from './components/info-product/info-product.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    LoadingComponent,
    SearchProductComponent,
    InfoProductComponent
  ],
  imports: [
    BrowserModule,
    appRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
