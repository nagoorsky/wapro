import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductService } from '../../services/products.service';

@Component({
  standalone: true,
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent {
  private readonly productService = inject(ProductService);

  list$: Observable<any[]> = this.productService.getProductsList();
}
