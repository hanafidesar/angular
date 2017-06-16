/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EditServiceService } from './edit-service.service';

describe('EditServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditServiceService]
    });
  });

  it('should ...', inject([EditServiceService], (service: EditServiceService) => {
    expect(service).toBeTruthy();
  }));
});
