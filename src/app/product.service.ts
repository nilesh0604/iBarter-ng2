import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }  from 'rxjs/Observable';
import { Env }  from './env';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class ProductService {

  constructor(private _http: Http) { }

  getLatestProducts(limit){
    return this._http.get(Env.API_ENDPOINT+'secured/latestProducts/'+limit)
        .map((response: Response) => response.json())
        .catch(this._errorHandler);
  }

  getProductByCategory(category, pageNum, recordsPerPage){
    return this._http.get(Env.API_ENDPOINT+'secured/products/category/'+category+'/'+pageNum+'/'+recordsPerPage)
        .map((response: Response) => response.json())
        .catch(this._errorHandler);
  }

  getProducts(){
  	return this._http.get(Env.API_ENDPOINT+'products')
  			.map((response: Response) => response.json())
  			.catch(this._errorHandler);
  }

  getProductById(id){
    return this._http.get(Env.API_ENDPOINT+'secured/products/'+id)
        .map((response: Response) => response.json())
        .catch(this._errorHandler);
  }

  _errorHandler(error: Response){
  		console.error(error);
  		return Observable.throw(error || "Server Error");
  }

}
