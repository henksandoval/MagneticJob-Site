import { of } from 'rxjs';
import { mockProfile } from '../../../shared/tests/mocks/mockProfile';
import { render, screen } from '@testing-library/angular';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ProfileService } from '../../../shared/services/profile/profile.service';
import '@testing-library/jest-dom';
import { TestimonialsComponent } from './testimonials.component';
import { Testimonial } from '../../../shared/models/testimonial';

const mockProfileService = {
  profile$: of(mockProfile),
  loadProfile: jest.fn(),
};

const renderComponent = async () => {
  await render(TestimonialsComponent, {
    providers: [provideHttpClientTesting(), { provide: ProfileService, useValue: mockProfileService }],
  });
};

describe('TestimonialsComponent', () => {
  beforeEach(async () => {
    await renderComponent();
  });

  it('You must submit all records regarding the Testimonials.', () => {
    mockProfile.testimonials.forEach((testimonial: Testimonial, id: number) => {
      const images = screen.getAllByTestId('image-src_' + id);
      const names = screen.getAllByTestId('name_' + id);
      const jobTitles = screen.getAllByTestId('jobTitle_' + id);
      const testimonials = screen.getAllByTestId('testimonial_' + id);

      expect(images.length).toBeGreaterThan(0);
      expect(names.length).toBeGreaterThan(0);
      expect(jobTitles.length).toBeGreaterThan(0);
      expect(testimonials.length).toBeGreaterThan(0);

      expect(images[0]).toHaveAttribute('src', testimonial.photoUrl);
      expect(names[0]).toHaveTextContent(testimonial.name);
      expect(jobTitles[0]).toHaveTextContent(testimonial.jobTitle);
      expect(testimonials[0]).toHaveTextContent(testimonial.testimonial);
      id++;
    });
  });
});
