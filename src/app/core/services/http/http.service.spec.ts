import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { HttpService } from './http.service';
import { HttpHeaders, HttpParams, provideHttpClient } from '@angular/common/http';

describe('HttpService', () => {
  let service: HttpService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpService, provideHttpClient(), provideHttpClientTesting()],
    });

    service = TestBed.inject(HttpService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should execute GET request correctly without params', () => {
    const url = 'stubs/get';

    service.get(url).subscribe();

    const testRequest = httpMock.expectOne(url);

    expect(testRequest.request.method).toBe('GET');
    expect(testRequest.request.url).toBe(url);
    expect(testRequest.request.params.has('param')).toBeFalsy();
    testRequest.flush({});
  });

  it('should execute GET request correctly with params', () => {
    const urlBase = 'stubs/get';
    const params = new HttpParams().set('param1', 'value1');
    const expectUrl = 'stubs/get?param1=value1';

    service.get(urlBase, params).subscribe();

    const testRequest = httpMock.expectOne(expectUrl);

    expect(testRequest.request.method).toBe('GET');
    expect(testRequest.request.params.has('param1')).toBeTruthy();
    testRequest.flush({});
  });

  it('should execute POST request correctly', () => {
    const url = 'stubs/post';
    const body = { key: 'value' };
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    service.post(url, body, { headers }).subscribe();

    const testRequest = httpMock.expectOne(url);
    expect(testRequest.request.method).toBe('POST');
    expect(testRequest.request.body).toEqual(body);
    expect(testRequest.request.headers.get('Content-Type')).toBe('application/json');
    testRequest.flush({});
  });

  it('should execute PUT request correctly', () => {
    const url = 'stubs/put';
    const body = { key: 'value' };

    service.put(url, body).subscribe();

    const testRequest = httpMock.expectOne(url);
    expect(testRequest.request.method).toBe('PUT');
    expect(testRequest.request.body).toEqual(body);
    testRequest.flush({});
  });

  it('should execute PATCH request correctly', () => {
    const url = 'stubs/patch';
    const body = { key: 'value' };

    service.patch(url, body).subscribe();

    const testRequest = httpMock.expectOne(url);
    expect(testRequest.request.method).toBe('PATCH');
    expect(testRequest.request.body).toEqual(body);
    testRequest.flush({});
  });

  it('should execute DELETE request correctly', () => {
    const url = 'stubs/delete';
    const headers = new HttpHeaders().set('Authorization', 'Bearer token');

    service.delete(url, { headers }).subscribe();

    const testRequest = httpMock.expectOne(url);
    expect(testRequest.request.method).toBe('DELETE');
    expect(testRequest.request.headers.get('Authorization')).toBe('Bearer token');
    testRequest.flush({});
  });
});
