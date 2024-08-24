import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { ProfileService } from './profile.service';
import { mockProfile } from '../../tests/mocks/mockProfile';

describe('ProfileService', () => {
  let service: ProfileService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfileService, provideHttpClient(), provideHttpClientTesting()],
    });

    service = TestBed.inject(ProfileService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should load profile data', () => {
    service.loadProfile();

    const testRequest = httpMock.expectOne('assets/data.json');
    expect(testRequest.request.method).toBe('GET');
    testRequest.flush(mockProfile);

    service.profile$.subscribe((profile) => {
      expect(profile).toEqual(mockProfile);
    });
  });

  it('should not reload the profile if already loaded', () => {
    service['profileLoaded'] = true;

    service.loadProfile();

    httpMock.expectNone('assets/data.json');
  });
});
