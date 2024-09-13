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
    mockProfile.testimonials!.forEach((testimonial: Testimonial, id: number) => {
      expect(screen.getByTestId('image-src_' + id)).toHaveAttribute('src', testimonial.photoUrl);
      expect(screen.getByTestId('name_' + id)).toHaveTextContent(testimonial.name);
      expect(screen.getByTestId('jobTitle_' + id)).toHaveTextContent(testimonial.jobTitle);
      expect(screen.getByTestId('testimonial_' + id)).toHaveTextContent(testimonial.testimonial);
    });
  });
});
