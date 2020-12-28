import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListOverviewItemComponent } from './list-overview-item.component';

describe('ListOverviewItemComponent', () => {
  let component: ListOverviewItemComponent;
  let fixture: ComponentFixture<ListOverviewItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOverviewItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOverviewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
