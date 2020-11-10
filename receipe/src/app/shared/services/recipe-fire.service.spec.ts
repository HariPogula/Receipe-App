import { TestBed } from '@angular/core/testing';

import { RecipeFireService } from './recipe-fire.service';

describe('RecipeFireService', () => {
  let service: RecipeFireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipeFireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
