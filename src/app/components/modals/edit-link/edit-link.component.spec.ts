import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditLinkComponent } from './edit-link.component';

describe('EditLinkComponent', () => {
  let component: EditLinkComponent;
  let fixture: ComponentFixture<EditLinkComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
