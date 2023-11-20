import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/products.service';

@Component({
  standalone: true,
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  imports: [CommonModule, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailsComponent {
  private readonly productService = inject(ProductService);

  productId: number = 3;
  product$: Observable<any> = this.productService.getProductDetails(
    this.productId
  );
}
