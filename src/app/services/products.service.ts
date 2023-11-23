import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { config } from '../config';
import { Product } from '../shared/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly http = inject(HttpClient);

  getProductsList(): Observable<Product[]> {
    return this.http.get<Product[]>(config.apiUrl);
  }

  getProductDetails(id: number): Observable<Product> {
    return this.http.get<Product>(config.apiUrl + '/' + id);
  }
}
