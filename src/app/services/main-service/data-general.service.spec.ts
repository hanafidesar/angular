/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DataGeneralService } from './data-general.service';

describe('DataGeneralService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataGeneralService]
    });
  });

  it('should ...', inject([DataGeneralService], (service: DataGeneralService) => {
    expect(service).toBeTruthy();
  }));
});
