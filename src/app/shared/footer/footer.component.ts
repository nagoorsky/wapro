import { Component } from '@angular/core';
import { config } from '../../config';

@Component({
  standalone: true,
  selector: 'wapro-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  version = config.version;
}
