import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { Component } from '@angular/core';
import { SearchProductComponent } from './components/search-product/search-product.component';
import { InfoProductComponent } from './components/info-product/info-product.component';
import{ HomeComponent } from './components/home/home.component';




const routes: Routes = [
    { path: 'home', component: HomeComponent },
    {path:'products',component: ProductsComponent},
    {path:'searchproducts/:termino' , component:SearchProductComponent},
    {path:'infoproducts/:id',component:InfoProductComponent},
    { path: '**', pathMatch:'full', redirectTo: 'home' }
];

export const appRouting = RouterModule.forRoot(routes);