import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  DxButtonModule,
  DxListModule,
  DxSelectBoxModule,
  DxTileViewModule,
} from 'devextreme-angular';
import { Observable } from 'rxjs';

import { ProductService } from '../../services/products.service';
import { dxItem } from 'devextreme/ui/widget/ui.widget';

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
    DxButtonModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent {
  private readonly productService = inject(ProductService);

  viewOptions = [
    { id: 'list', text: 'Lista' },
    { id: 'tiles', text: 'Kafelki' },
  ];
  selectedView: string = 'tiles';

  productsList$: Observable<any[]> = this.productService.getProductsList();

  navigateToProduct(id: number) {
    console.log(id);
  }
}
