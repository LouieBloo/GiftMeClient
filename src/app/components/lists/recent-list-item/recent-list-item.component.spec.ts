import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentListItemComponent } from './recent-list-item.component';

describe('RecentListItemComponent', () => {
  let component: RecentListItemComponent;
  let fixture: ComponentFixture<RecentListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
