import { TestBed, inject } from '@angular/core/testing';

import { ServiceimagenService } from './serviceimagen.service';

describe('ServiceimagenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceimagenService]
    });
  });

  it('should be created', inject([ServiceimagenService], (service: ServiceimagenService) => {
    expect(service).toBeTruthy();
  }));
});
