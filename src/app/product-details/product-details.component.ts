import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

	productDetails:any = {};
  test = [];
	errorMsg:string;
  showLoader = true;

  constructor(private _productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit() {
  	let id = this.route.snapshot.params['id'];
  	this._productService.getProductById(id)
  	.subscribe(resProductDetails => this.productDetails = resProductDetails,
  				resProductsError => this.errorMsg = resProductsError,
          () => this.showLoader = false);
  }

}
