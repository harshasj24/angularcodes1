import { TestBed } from '@angular/core/testing';

import { VerifygaurdGuard } from './verifygaurd.guard';

describe('VerifygaurdGuard', () => {
  let guard: VerifygaurdGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(VerifygaurdGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
