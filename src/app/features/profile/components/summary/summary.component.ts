import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Summary } from './interfaces/summary';
@Component({
  selector: 'app-summary',
  standalone: true,
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SummaryComponent {
  summarySet = input.required<Summary | undefined>();
}
