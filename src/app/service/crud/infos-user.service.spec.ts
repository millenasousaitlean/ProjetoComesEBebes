import { TestBed } from '@angular/core/testing';

import { InfosUserService } from './infos-user.service';

describe('InfosUserService', () => {
  let service: InfosUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfosUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
