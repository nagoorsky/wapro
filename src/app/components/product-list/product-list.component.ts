import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  DxListModule,
  DxSelectBoxModule,
  DxTileViewModule,
} from 'devextreme-angular';
import { Observable } from 'rxjs';

import { ProductService } from '../../services/products.service';
import { ListItemComponent } from './list-item/list-item.component';
import { TilesItemComponent } from './tiles-item/tiles-item.component';

@Component({
  standalone: true,
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  imports: [
    CommonModule,
    DxSelectBoxModule,
    DxListModule,
    ListItemComponent,
    DxTileViewModule,
    TilesItemComponent,
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

  productsList$: Observable<any[]> = this.productService.getProductsList();
}
