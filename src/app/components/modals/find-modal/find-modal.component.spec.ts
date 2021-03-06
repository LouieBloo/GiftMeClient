import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FindModalComponent } from './find-modal.component';

describe('FindModalComponent', () => {
  let component: FindModalComponent;
  let fixture: ComponentFixture<FindModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FindModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
