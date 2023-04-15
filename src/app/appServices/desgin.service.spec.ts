import { TestBed } from '@angular/core/testing';

import { DesginService } from './desgin.service';

describe('DesginService', () => {
  let service: DesginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DesginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
