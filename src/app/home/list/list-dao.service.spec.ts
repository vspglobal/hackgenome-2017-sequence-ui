import { TestBed, inject } from '@angular/core/testing';

import { ListDaoService } from './list-dao.service';

describe('ListDaoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListDaoService]
    });
  });

  it('should ...', inject([ListDaoService], (service: ListDaoService) => {
    expect(service).toBeTruthy();
  }));
});
