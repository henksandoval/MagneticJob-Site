import { Component, inject } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ProfileService } from '../../../shared/services/profile/profile.service';
import { AsyncPipe, JsonPipe, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [NgIf, NgFor, AsyncPipe, JsonPipe, CarouselModule],
  templateUrl: './testimonials.component.html',
  styles: ``,
})
export class TestimonialsComponent {
  private profileService: ProfileService = inject(ProfileService);
  profile$ = this.profileService.profile$;

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };
}
