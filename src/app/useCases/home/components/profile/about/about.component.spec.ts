import { render, screen } from '@testing-library/angular';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { AboutComponent } from './about.component';
import { ProfileService } from '../../../shared/services/profile/profile.service';
import { About } from '../../../shared/models/about';
import { Profile } from '../../../shared/models/profile';
import '@testing-library/jest-dom';

const mockAbout: About = {
  description: 'Test Description',
  text: 'Test Text',
  hobbies: 'Test Hobbies',
  birthday: '01/01/2000',
  website: 'https://example.com',
  phoneNumber: 123456789,
  city: 'Test City',
  age: 30,
  degree: 'Test Degree',
  email: 'test@example.com',
  freelance: 'Available',
  workExperience: 'Test Experience'
};

const mockProfile: Profile = {
  about: mockAbout
};

const mockProfileService = {
  profile$: of(mockProfile),
};

const renderComponent = async () => {
  await render(AboutComponent, {
    providers: [
      provideHttpClientTesting(),
      { provide: ProfileService, useValue: mockProfileService },
    ],
  });
};

describe('AboutComponent', () => {
  it('should display profile description', async () => {
    await renderComponent();
    expect(screen.getByTestId('description')).toHaveTextContent(mockAbout.description);
  });

  it('should display profile text', async () => {
    await renderComponent();
    expect(screen.getByTestId('about-tittle')).toHaveTextContent(mockAbout.text);
  });

  it('should display profile hobbies', async () => {
    await renderComponent();
    expect(screen.getByText(mockAbout.hobbies)).toBeInTheDocument();
  });

  it('should display profile birthday', async () => {
    await renderComponent();
    expect(screen.getByTestId('birthday')).toHaveTextContent(mockAbout.birthday);
  });

  it('should display profile website', async () => {
    await renderComponent();
    expect(screen.getByTestId('website')).toHaveTextContent(mockAbout.website);
  });

  it('should display profile phone number', async () => {
    await renderComponent();
    expect(screen.getByTestId('phoneNumber')).toHaveTextContent(mockAbout.phoneNumber.toString());
  });

  it('should display profile city', async () => {
    await renderComponent();
    expect(screen.getByTestId('city')).toHaveTextContent(mockAbout.city);
  });

  it('should display profile age', async () => {
    await renderComponent();
    expect(screen.getByTestId('age')).toHaveTextContent(mockAbout.age.toString());
  });

  it('should display profile degree', async () => {
    await renderComponent();
    expect(screen.getByTestId('degree')).toHaveTextContent(mockAbout.degree);
  });

  it('should display profile email', async () => {
    await renderComponent();
    expect(screen.getByTestId('email')).toHaveTextContent(mockAbout.email);
  });

  it('should display profile freelance status', async () => {
    await renderComponent();
    expect(screen.getByTestId('freelance-status')).toHaveTextContent(mockAbout.freelance);
  });

  it('should display profile work experience', async () => {
    await renderComponent();
    expect(screen.getByTestId('workExperience')).toHaveTextContent(mockAbout.workExperience);
  });
});