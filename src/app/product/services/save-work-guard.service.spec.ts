import { TestBed, inject } from '@angular/core/testing';

import { SaveWorkGuardService } from './save-work-guard.service';

describe('SaveWorkGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SaveWorkGuardService]
    });
  });

  it('should be created', inject([SaveWorkGuardService], (service: SaveWorkGuardService) => {
    expect(service).toBeTruthy();
  }));
});
