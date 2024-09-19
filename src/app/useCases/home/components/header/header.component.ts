import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NgxPageScrollModule } from 'ngx-page-scroll';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgxPageScrollModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
