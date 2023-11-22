import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DxTooltipModule } from 'devextreme-angular';

@Component({
  standalone: true,
  selector: 'buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
  imports: [DxTooltipModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonsComponent {
  @Input() productId!: number;

  mouseClick(event: any) {
    event.stopPropagation();
  }
}
