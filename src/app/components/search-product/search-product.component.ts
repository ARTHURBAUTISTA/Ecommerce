import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { CommerceService } from './../../service/commerce.service';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit {

  private termino: string="";
  public productsFiltrados: any={}


  constructor(private ActivatedRoute:ActivatedRoute,private _productService:CommerceService, private router:Router) { 
    this.ActivatedRoute.params.subscribe((terminoURL)=>{
      this.termino=terminoURL.termino

      console.log(this.termino)
      this.productsFiltrados=this._productService.BuscarProduct(this.termino);
      console.log(this.productsFiltrados)
    })

  }

  ngOnInit() {
  }

  

}
