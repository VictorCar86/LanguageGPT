import { TestBed } from '@angular/core/testing';

import { SynthesisSpeakingService } from './synthesis-speaking.service';

describe('SynthesisSpeakingService', () => {
  let service: SynthesisSpeakingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SynthesisSpeakingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
