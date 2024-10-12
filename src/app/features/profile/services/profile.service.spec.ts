import { MockBuilder, MockInstance, ngMocks } from 'ng-mocks';
import { ProfileService } from './profile.service';
import { HttpService } from '@core/services/http/http.service';
import { of } from 'rxjs';
import { mockProfile } from '../mocks/profile.mock';
import { HttpClient } from '@angular/common/http';

describe('ProfileService', () => {
  let service: ProfileService;
  let httpService: HttpService;

  beforeEach(() => {
    return MockBuilder(ProfileService)
      .mock(HttpService)
      .mock(HttpClient)
      .then(() => {
        service = ngMocks.findInstance(ProfileService);
        httpService = ngMocks.findInstance(HttpService);

        //aqui use as unknow as Profile para que se  lo coma el Out ese que creaste
        MockInstance(HttpService, 'get', () => of(mockProfile));
        // MockInstance(HttpService, (instance) => {
        //   instance.get = jest.fn().mockReturnValue(of(mockProfile));
        // });
      });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should load profile details successfully', () => {
    service.loadProfile();

    expect(service.profile$()).toEqual(mockProfile);
    expect(service['profileLoaded']()).toBe(true);
  });

  it('should not load profile again if already loaded', () => {
    service.loadProfile();
    expect(service['profileLoaded']()).toBe(true);

    const httpGetSpy = jest.spyOn(httpService, 'get');

    service.loadProfile();

    expect(httpGetSpy).not.toHaveBeenCalled();
  });
});
