import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentListsComponent } from './recent-lists.component';

describe('RecentListsComponent', () => {
  let component: RecentListsComponent;
  let fixture: ComponentFixture<RecentListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
