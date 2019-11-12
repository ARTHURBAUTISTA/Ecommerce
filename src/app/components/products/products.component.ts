import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommerceService } from '../../service/commerce.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: []
})
export class ProductsComponent implements OnInit {


  public ProductsRecibidos:Array<any>=[];
  public loading:boolean=true;

  constructor(private router:Router, public _CommerceService:CommerceService) { }

  ngOnInit() {

    this.ProductsRecibidos = this._CommerceService.ReturnProducts();

    setTimeout(() => {
      this.loading=false;
    }, 1000);
  }

  public MandaInformacion(idProduct){
    console.log(idProduct);
    this.router.navigate(['infoproducts',idProduct])
    
  }


}

