import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DxButtonModule } from 'devextreme-angular';
import { ButtonsComponent } from '../../../shared/buttons/buttons.component';

@Component({
  standalone: true,
  selector: 'list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  imports: [CommonModule, DxButtonModule, RouterLink, ButtonsComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListItemComponent {
  @Input() product: any;

  mouseClick(event: any) {
    event.stopPropagation();
  }
}
