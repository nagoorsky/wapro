import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  DxListModule,
  DxSelectBoxModule,
  DxTileViewModule,
} from 'devextreme-angular';
import { Observable } from 'rxjs';

import { ProductService } from '../../services/products.service';
import { Product } from '../../shared/interfaces';
import { ProductItemComponent } from './product-item/product-item.component';

@Component({
  standalone: true,
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  imports: [
    CommonModule,
    DxSelectBoxModule,
    DxListModule,
    DxTileViewModule,
    ProductItemComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent {
  private readonly productService = inject(ProductService);

  viewOptions = [
    { id: 'list', text: 'Lista' },
    { id: 'tiles', text: 'Kafelki' },
  ];
  selectedView: string = 'list';

  productsList$: Observable<Product[]> = this.productService.getProductsList();
}
