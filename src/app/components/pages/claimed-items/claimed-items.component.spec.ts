import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ClaimedItemsComponent } from './claimed-items.component';

describe('ClaimedItemsComponent', () => {
  let component: ClaimedItemsComponent;
  let fixture: ComponentFixture<ClaimedItemsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimedItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimedItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
