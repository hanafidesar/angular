import { TestBed, inject } from '@angular/core/testing';

import { SweetalertService } from './sweetalert.service';

describe('SweetalertService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SweetalertService]
    });
  });

  it('should ...', inject([SweetalertService], (service: SweetalertService) => {
    expect(service).toBeTruthy();
  }));
});
