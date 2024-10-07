import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Testimonial } from './testimonial';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestimonialsComponent {
  testimonials = input.required<Testimonial[] | undefined>();

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    nav: false,
    items: 1,
    autoplay: true,
    autoplayTimeout: 5000,
  };
}
