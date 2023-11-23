import { CommonModule } from '@angular/common';
import {
  DxButtonModule,
  DxDataGridModule,
  DxFormModule,
  DxTabPanelModule,
  DxTemplateModule,
} from 'devextreme-angular';
import { Observable } from 'rxjs';

import { ProductService } from '../../services/products.service';
import { ButtonsComponent } from '../../shared/buttons/buttons.component';
import { Product } from '../../shared/interfaces';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

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
    DxTemplateModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailsComponent {
  private readonly productService = inject(ProductService);
  private readonly activatedRoute = inject(ActivatedRoute);
  productId = this.activatedRoute.snapshot.params['id'];

  variantColumns = [
    { dataField: 'variantName', caption: 'Nazwa', minWidth: 110 },
    { dataField: 'variantCode', caption: 'Kod', width: 40 },
    {
      dataField: 'maxNumberOfUsers',
      caption: 'Maks. liczba użytkowników',
      width: 160,
      hidingPriority: 0,
    },
  ];

  product$: Observable<Product> = this.productService.getProductDetails(
    this.productId
  );
}
