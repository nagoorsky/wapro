import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DxButtonModule } from 'devextreme-angular';
import { ButtonsComponent } from '../../../shared/buttons/buttons.component';

@Component({
  standalone: true,
  selector: 'tiles-item',
  templateUrl: './tiles-item.component.html',
  styleUrls: ['./tiles-item.component.scss'],
  imports: [CommonModule, DxButtonModule, RouterLink, ButtonsComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TilesItemComponent {
  @Input() product: any;

  mouseClick(event: any) {
    event.stopPropagation();
  }
}
