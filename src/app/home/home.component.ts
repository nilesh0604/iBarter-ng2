import { Component, OnInit, EventEmitter } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  outputs: ['userAuthetication']
})
export class HomeComponent implements OnInit {
	products=[];
	errorMsg:string;

  userAuthetication: EventEmitter<any> = new EventEmitter();

  constructor(private _productService: ProductService, private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.userService.isAutheticated = true;
    this.userAuthetication.emit(this.userService.isAutheticated);

  	this._productService.getLatestProducts(6)
  	.subscribe(resProductsData => this.products = resProductsData,
  				resProductsError => this.errorMsg = resProductsError);
  }

  onSelect(product){
    this.router.navigate(['/productDetails', product._id]);
  }



}
