import { Product } from 'src/app/Schema/product';
// import { Http } from '@angular/http';
// import { Injectable } from '@angular/core';
// import {Http} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {
private _getUrl="http://localhost:3000/api/guide";
private _postUrl="http://localhost:3000/api/guide/";

  constructor(private _http : HttpClient) { }
//   getEmpList(): Observable<Employees[]> {
//     return this._http.get(this._getUrl)
//     .map((response:Response) => <Employees[]>response.json()
//     )
//     .catch(this.handleError);
// }
  getVideos() : Observable<Product[]>{
    return this._http.get<Product[]>(this._getUrl)
    // .pipe(map((res:Response)=> res.json()));
  }
 addProduct(prod : Product) {
   let headers=new HttpHeaders ({ 'Content-Type' : 'application/json'});
   let options ={headers : headers}
    return this._http.post(this._postUrl,JSON.stringify(prod),options)
    // .pipe(map((res:Response)=> <Product[]> res.json()));
  }
}