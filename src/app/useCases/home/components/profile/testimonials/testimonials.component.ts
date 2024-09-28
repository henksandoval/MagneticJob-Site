import { Component, inject } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ProfileService } from '../../../shared/services/profile/profile.service';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent {
  private profileService: ProfileService = inject(ProfileService);
  profile$ = this.profileService.profile$;

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    nav: false,
    items: 1,
    autoplay: true,
    autoplayTimeout: 5000,
  };
}
