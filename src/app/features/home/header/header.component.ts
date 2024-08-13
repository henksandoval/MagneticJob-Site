import { Component } from '@angular/core';
import { NgxPageScrollModule } from 'ngx-page-scroll';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgxPageScrollModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
