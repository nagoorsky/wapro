import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { DxButtonModule } from 'devextreme-angular';
import { ButtonsComponent } from '../../../shared/buttons/buttons.component';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '../../../shared/pipes/currency.pipe';
import { Product } from '../../../shared/interfaces/product.dto';

@Component({
  standalone: true,
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
  imports: [
    CommonModule,
    DxButtonModule,
    RouterLink,
    ButtonsComponent,
    CurrencyPipe,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductItemComponent {
  @Input() product: Product;

  handleMouseEvent(event: any): void {
    event.stopPropagation();
  }
}
