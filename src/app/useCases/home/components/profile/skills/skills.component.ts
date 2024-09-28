import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SkillSet } from 'src/app/useCases/home/shared/models/skills';

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent {
  skillSet = input.required<SkillSet | undefined>();
}
