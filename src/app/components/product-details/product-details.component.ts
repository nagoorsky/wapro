import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import {
  DxButtonModule,
  DxDataGridModule,
  DxFormModule,
  DxTabPanelModule,
} from 'devextreme-angular';
import { Observable, tap } from 'rxjs';

import { ProductService } from '../../services/products.service';
import { ButtonsComponent } from '../../shared/buttons/buttons.component';
import { Product } from '../../shared/interfaces';
import { CurrencyPipe } from '../../shared/pipes/currency.pipe';

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
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailsComponent {
  private readonly productService = inject(ProductService);
  private readonly activatedRoute = inject(ActivatedRoute);
  productId = this.activatedRoute.snapshot.params['id'];

  variantColumns = [
    { dataField: 'variantName', caption: 'Nazwa', minWidth: 110 },
    { dataField: 'variantCode', caption: 'Kod', width: 50 },
    {
      dataField: 'maxNumberOfUsers',
      caption: 'Maks. liczba użytkowników',
      width: 160,
      hidingPriority: 0,
    },
  ];

  product$: Observable<Product> = this.productService
    .getProductDetails(this.productId)
    .pipe(
      tap((product: Product) => {
        this.productService.setPageTitle(product.productName);
      })
    );

  submitContactForm(e: any) {
    alert('Wysłano wiadomość');
    e.preventDefault();
  }
}
