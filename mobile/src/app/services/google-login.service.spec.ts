import { TestBed } from '@angular/core/testing';

import { GoogleLoginService } from './google-login.service';

describe('GoogleLoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GoogleLoginService = TestBed.get(GoogleLoginService);
    expect(service).toBeTruthy();
  });
});
