import { TestBed } from '@angular/core/testing';

import { FacadeUiService } from './facade-ui.service';

describe('FacadeUiService', () => {
  let service: FacadeUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacadeUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
