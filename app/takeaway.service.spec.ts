import { TestBed, inject } from '@angular/core/testing';

import { TakeawayService } from './takeaway.service';

describe('TakeawayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TakeawayService]
    });
  });

  it('should ...', inject([TakeawayService], (service: TakeawayService) => {
    expect(service).toBeTruthy();
  }));
});
