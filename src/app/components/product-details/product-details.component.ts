import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
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
    { dataField: 'variantName', caption: 'Nazwa' },
    { dataField: 'variantCode', caption: 'Kod' },
    {
      dataField: 'maxNumberOfUsers',
      caption: 'Maks. liczba użytkowników',
    },
  ];

  product$: Observable<any> = this.productService.getProductDetails(
    this.productId
  );
}
