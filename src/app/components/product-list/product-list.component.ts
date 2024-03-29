import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { DxListModule, DxSelectBoxModule } from 'devextreme-angular';
import { Observable } from 'rxjs';

import { ProductService } from '../../services/products.service';
import { ProductItemComponent } from './product-item/product-item.component';
import { Product } from '../../shared/interfaces/product.dto';

@Component({
  standalone: true,
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  imports: [
    CommonModule,
    DxSelectBoxModule,
    DxListModule,
    ProductItemComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent implements OnInit {
  private readonly productService = inject(ProductService);

  productsList$: Observable<Product[]> = this.productService.getProductsList();

  viewOptions = [
    { id: 'list', text: 'Lista' },
    { id: 'tiles', text: 'Kafelki' },
  ];
  selectedView: string = 'list';

  selectView(event: any) {
    localStorage.setItem('view', event.selectedItem.id);
  }

  ngOnInit(): void {
    const view = localStorage.getItem('view');
    if (view) {
      this.selectedView = view;
    }
  }
}
