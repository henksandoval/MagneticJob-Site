import { MockBuilder, MockInstance, ngMocks } from 'ng-mocks';
import { ProfileService } from './profile.service';
import { HttpService } from '@core/services/http/http.service';
import { of, throwError } from 'rxjs';
import { mockProfile } from '../mocks/profile.mock';

describe('ProfileService', () => {
  MockInstance.scope('case');

  beforeEach(async () => {
    await MockBuilder(ProfileService).mock(HttpService);

    MockInstance(HttpService, (instance) => {
      jest.spyOn(instance, 'get').mockReturnValue(of(mockProfile));
    });
  });

  it('should be created', () => {
    const service = ngMocks.findInstance(ProfileService);
    expect(service).toBeTruthy();
  });

  it('should load profile details successfully', () => {
    const service = ngMocks.findInstance(ProfileService);
    const httpService = ngMocks.findInstance(HttpService);

    const profile = service.profile$();
    
    expect(profile).toEqual(mockProfile);
    expect(httpService.get).toHaveBeenCalledTimes(1);
  });

  it('should handle error when loading profile', () => {
    MockInstance(HttpService, (instance) => {
      jest.spyOn(instance, 'get').mockReturnValue(throwError(() => new Error('Network error')));
    });

    const service = ngMocks.findInstance(ProfileService);
    const httpService = ngMocks.findInstance(HttpService);

    const response = service.profile$();

    expect(response).toBeUndefined();
    expect(httpService.get).toHaveBeenCalledTimes(1);
  });
});
