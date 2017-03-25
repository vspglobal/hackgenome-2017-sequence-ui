/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OauthService } from './oauth.service';

describe('OauthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OauthService]
    });
  });

  it('should ...', inject([OauthService], (service: OauthService) => {
    expect(service).toBeTruthy();
  }));
});
