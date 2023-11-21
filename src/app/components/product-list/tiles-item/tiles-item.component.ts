import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DxButtonModule } from 'devextreme-angular';

@Component({
  standalone: true,
  selector: 'tiles-item',
  templateUrl: './tiles-item.component.html',
  styleUrls: ['./tiles-item.component.scss'],
  imports: [CommonModule, DxButtonModule, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TilesItemComponent {
  @Input() product: any;
}
