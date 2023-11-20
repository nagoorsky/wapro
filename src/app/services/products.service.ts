import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { config } from '../config';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly http = inject(HttpClient);

  getProductsList(): Observable<any[]> {
    return this.http.get<any[]>(config.apiUrl);
  }

  getProductDetails(id: number): Observable<any> {
    return this.http.get<any>(config.apiUrl + '/' + id);
  }
}
