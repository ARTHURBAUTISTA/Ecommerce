import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from "@angular/router";
import { CommerceService } from '../../service/commerce.service';

@Component({
  selector: 'app-info-product',
  templateUrl: './info-product.component.html',
  styleUrls: ['./info-product.component.css']
})
export class InfoProductComponent implements OnInit {

  public productFiltrado: any = {};

  constructor(private activatedrouter: ActivatedRoute, private _CommerceService: CommerceService) { 

    const IdProductURL = this.activatedrouter.snapshot.paramMap.get('id');

    this.productFiltrado = this._CommerceService.BuscarProduct(IdProductURL);

     console.log(this.productFiltrado);
    
  }

  ngOnInit() {
  }

}
