import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products=[];
	errorMsg:string;



  constructor(private _productService: ProductService, private router: Router, private route: ActivatedRoute) { }

  category; 
  pageNum = 1;
  recordsPerPage = 6;


  ngOnInit() {

  	this.route.params.subscribe((params: Params)=>{
  		this.category = params['category'];
      this.pageNum = 1;

  		this._productService.getProductByCategory(this.category, this.pageNum, this.recordsPerPage)
  	      .subscribe(resProductsData => this.products = resProductsData,
  				resProductsError => this.errorMsg = resProductsError);
  	});

  	
  }

  onSelect(product){
    this.router.navigate(['/productDetails', product._id]);
  }

  goNext(){
    this.pageNum++
    this._productService.getProductByCategory(this.category, this.pageNum, this.recordsPerPage)
          .subscribe(resProductsData => this.products = resProductsData,
          resProductsError => this.errorMsg = resProductsError);
  }

  goBack(){
    this.pageNum -= 1;
    this._productService.getProductByCategory(this.category, this.pageNum, this.recordsPerPage)
          .subscribe(resProductsData => this.products = resProductsData,
          resProductsError => this.errorMsg = resProductsError);
  }

}
