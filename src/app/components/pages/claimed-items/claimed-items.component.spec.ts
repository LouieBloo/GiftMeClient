import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimedItemsComponent } from './claimed-items.component';

describe('ClaimedItemsComponent', () => {
  let component: ClaimedItemsComponent;
  let fixture: ComponentFixture<ClaimedItemsComponent>;

  beforeEach(async(() => {
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
