import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import {
  DxButtonModule,
  DxDataGridModule,
  DxFormModule,
  DxTabPanelModule,
  DxTextAreaModule,
} from 'devextreme-angular';
import { Observable, tap } from 'rxjs';

import { ProductService } from '../../services/products.service';
import { ButtonsComponent } from '../../shared/buttons/buttons.component';
import { CurrencyPipe } from '../../shared/pipes/currency.pipe';
import { Product } from '../../shared/interfaces/product.dto';

@Component({
  standalone: true,
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  imports: [
    CommonModule,
    RouterLink,
    DxButtonModule,
    DxTabPanelModule,
    DxDataGridModule,
    DxFormModule,
    ButtonsComponent,
    CurrencyPipe,
    DxTextAreaModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailsComponent {
  private readonly productService = inject(ProductService);
  private readonly activatedRoute = inject(ActivatedRoute);
  productId = this.activatedRoute.snapshot.params['id'];

  variantColumns = [
    { dataField: 'variantName', caption: 'Nazwa', minWidth: 110 },
    { dataField: 'variantCode', caption: 'Kod', minWidth: 55 },
    {
      dataField: 'maxNumberOfUsers',
      caption: 'Maks. liczba użytkowników',
      minWidth: 55,
    },
  ];

  product$: Observable<Product> = this.productService
    .getProductDetails(this.productId)
    .pipe(
      tap((product: Product) => {
        this.productService.setPageTitle(product.productName);
      })
    );

  submitContactForm(e: any): void {
    alert('Wysłano wiadomość');
    e.preventDefault();
  }
}
