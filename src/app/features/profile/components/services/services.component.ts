import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Service } from './service';

@Component({
  selector: 'app-services',
  standalone: true,
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesComponent {
  serviceSet = input.required<Service | undefined>();
}
