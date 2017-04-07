import { TestBed, inject } from '@angular/core/testing';

import { FileDaoService } from './file-dao.service';

describe('FileDaoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FileDaoService]
    });
  });

  it('should ...', inject([FileDaoService], (service: FileDaoService) => {
    expect(service).toBeTruthy();
  }));
});
