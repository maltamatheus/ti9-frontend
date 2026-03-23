import { TestBed } from '@angular/core/testing';

import { AuthenticationServices } from './authentication-services';

describe('AuthenticationServices', () => {
  let service: AuthenticationServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticationServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
