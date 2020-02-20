import { TestBed } from '@angular/core/testing';

import { WishListItemService } from './wish-list-item.service';

describe('WishListItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WishListItemService = TestBed.get(WishListItemService);
    expect(service).toBeTruthy();
  });
});
