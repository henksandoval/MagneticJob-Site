import { MockBuilder, MockInstance, ngMocks } from 'ng-mocks';
import { ProfileService } from './profile.service';
import { HttpService } from '@core/services/http/http.service';

describe('ProfileService', () => {
  beforeEach(() => MockBuilder(ProfileService).mock(HttpService));

  it('should be created', () => {
    MockInstance(ProfileService);

    expect(ngMocks.findInstance(ProfileService)).toBeTruthy();
  });
});
