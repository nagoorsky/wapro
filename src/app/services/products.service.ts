import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { config } from '../config';
import { Title } from '@angular/platform-browser';
import { Product } from '../shared/interfaces/product.dto';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly http = inject(HttpClient);
  private readonly title = inject(Title);

  getProductsList(): Observable<Product[]> {
    return this.http.get<Product[]>(config.apiUrl);
  }

  getProductDetails(id: number): Observable<Product> {
    return this.http.get<Product>(config.apiUrl + '/' + id);
  }

  setPageTitle(title: string): void {
    const suffix = 'Wapro';
    const metaTitle = title + ' | ' + suffix;
    this.title.setTitle(metaTitle);
  }
}
