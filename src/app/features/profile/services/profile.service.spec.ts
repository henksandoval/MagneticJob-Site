import { MockBuilder, MockInstance, ngMocks } from 'ng-mocks';
import { ProfileService } from './profile.service';
import { HttpService } from '@core/services/http/http.service';
import { of, throwError } from 'rxjs';
import { mockProfile } from '../mocks/profile.mock';

describe('ProfileService', () => {
  MockInstance.scope('case');

  beforeEach(async () => {
    await MockBuilder(ProfileService).mock(HttpService);
  });

  it('should be created', () => {
    const service = ngMocks.findInstance(ProfileService);

    expect(service).toBeTruthy();
  });

  it('should load profile details successfully', () => {
    shouldLoadProfileSuccessfully();
  });

  it('should not load profile again if already loaded', () => {
    shouldLoadProfileSuccessfully();

    jest.clearAllMocks();
    const service = ngMocks.findInstance(ProfileService);
    const httpService = ngMocks.findInstance(HttpService);

    service.loadProfile();

    expect(httpService.get).not.toHaveBeenCalled();
    expect(service.profile$()).toEqual(mockProfile);
  });

  it('should handle error when loading profile', () => {
    MockInstance(HttpService, (instance) => {
      jest.spyOn(instance, 'get').mockReturnValue(throwError(() => new Error('Network error')));
    });

    const service = ngMocks.findInstance(ProfileService);
    service.loadProfile();

    const httpService = ngMocks.findInstance(HttpService);
    expect(service['profileLoaded']()).toBe(false);
    expect(httpService.get).toHaveBeenCalledTimes(1);
    expect(service.profile$()).toBeNull();
  });

  function shouldLoadProfileSuccessfully() {
    MockInstance(HttpService, (instance) => {
      jest.spyOn(instance, 'get').mockReturnValue(of(mockProfile));
    });

    const service = ngMocks.findInstance(ProfileService);
    const httpService = ngMocks.findInstance(HttpService);

    service.loadProfile();

    expect(service.profile$()).toEqual(mockProfile);
    expect(service['profileLoaded']()).toBe(true);
    expect(httpService.get).toHaveBeenCalledTimes(1);
  }
});
