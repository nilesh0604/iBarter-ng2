import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  providers: [ProductService]
})
export class ContentComponent implements OnInit {
	products = [];
	errorMsg:string;

  constructor(private _productService: ProductService) { }

  ngOnInit() {
  	this._productService.getProducts()
  	.subscribe(resProductsData => this.products = resProductsData,
  				resProductsError => this.errorMsg = resProductsError);
	console.log(this.products);
  }

}
