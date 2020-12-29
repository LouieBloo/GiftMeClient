import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ClaimModalComponent } from './claim-modal.component';

describe('ClaimModalComponent', () => {
  let component: ClaimModalComponent;
  let fixture: ComponentFixture<ClaimModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
