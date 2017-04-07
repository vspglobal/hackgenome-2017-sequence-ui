import { TestBed, inject } from '@angular/core/testing';

import { SuggestDaoService } from './suggest-dao.service';

describe('SuggestDaoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SuggestDaoService]
    });
  });

  it('should ...', inject([SuggestDaoService], (service: SuggestDaoService) => {
    expect(service).toBeTruthy();
  }));
});
