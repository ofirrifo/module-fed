import { TestBed } from '@angular/core/testing';

import { MfCommunicationLibService } from './mf-communication-lib.service';

describe('MfCommunicationLibService', () => {
  let service: MfCommunicationLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MfCommunicationLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
