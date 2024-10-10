import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { ProfileService } from './profile.service';
import { mockProfile } from '../mocks/profile.mock';

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

  it('should load profile data successfully', () => {
    service.loadProfile();

    const testRequest = httpMock.expectOne('assets/data.json');
    expect(testRequest.request.method).toBe('GET');

    testRequest.flush(mockProfile);

    expect(service.profile$()).toEqual(mockProfile);
    expect(service.profile$()).not.toBeNull();
  });

  it('should handle errors when loading profile data', () => {
    service.loadProfile();

    const testRequest = httpMock.expectOne('assets/data.json');
    expect(testRequest.request.method).toBe('GET');

    testRequest.error(new ProgressEvent('Network error'));

    expect(service.profile$()).toBeNull();
  });

  it('should not reload the profile if already loaded', () => {
    service.loadProfile();

    const testRequest = httpMock.expectOne('assets/data.json');
    testRequest.flush(mockProfile);

    service.loadProfile();

    httpMock.expectNone('assets/data.json');
    expect(service.profile$()).toEqual(mockProfile);
  });
});
