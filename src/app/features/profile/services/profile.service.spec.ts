import { MockBuilder } from 'ng-mocks';
import { ProfileService } from './profile.service';
import { of } from 'rxjs';
import { HttpService } from '../../../core/services/http/http.service';

describe('ProfileService', () => {
  let service: ProfileService;
  let httpMock: HttpService;

  beforeEach(() => {
    MockBuilder(ProfileService).mock(HttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should load profile data successfully', () => {
    spyOn(httpMock, 'get').and.returnValue(of({}));

    service.loadProfile();

    expect(httpMock.get).toHaveBeenCalledWith('stubs/data.json');
  });
});
