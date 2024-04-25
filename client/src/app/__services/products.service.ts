import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
	private apiURL = "http://127.0.0.1:8000/api/";

	constructor(private http: HttpClient) {}
  

  getProducts_Tops(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}tops/`);
  }
  getProducts_Shoes(): Observable<any>{
    return this.http.get<any>(`${this.apiURL}shoes/`)
  }
  getProducts_Pants(): Observable<any>{
    return this.http.get<any>(`${this.apiURL}pants/`)
  }
  getProducts_Hats(): Observable<any>{
    return this.http.get<any>(`${this.apiURL}hats/`)
  }
  getCategories(): Observable<any>{
    return this.http.get<any>(`${this.apiURL}categories/1`)
  }


}
