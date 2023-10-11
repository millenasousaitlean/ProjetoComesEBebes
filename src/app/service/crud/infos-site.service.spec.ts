import { TestBed } from '@angular/core/testing';

import { InfosSiteService } from './infos-site.service';

describe('InfosSiteService', () => {
  let service: InfosSiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfosSiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
