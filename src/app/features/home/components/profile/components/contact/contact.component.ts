import { AsyncPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Contact } from './interfaces/contact';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgIf, AsyncPipe],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  contactSet = input<Contact>();
}
