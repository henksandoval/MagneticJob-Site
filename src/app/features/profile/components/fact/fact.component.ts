import { AsyncPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Facts } from './facts';

@Component({
  selector: 'app-fact',
  standalone: true,
  imports: [NgIf, AsyncPipe],
  templateUrl: './fact.component.html',
  styleUrl: 'fact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FactComponent {
  factSet = input.required<Facts | undefined>();
}
