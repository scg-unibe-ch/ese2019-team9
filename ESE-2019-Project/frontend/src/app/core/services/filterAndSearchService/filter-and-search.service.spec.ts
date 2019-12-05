import { TestBed } from '@angular/core/testing';

import { FilterAndSearchService } from './filter-and-search.service';

describe('FilterAndSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilterAndSearchService = TestBed.get(FilterAndSearchService);
    expect(service).toBeTruthy();
  });
});
