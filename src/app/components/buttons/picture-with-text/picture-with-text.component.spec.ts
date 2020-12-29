import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PictureWithTextComponent } from './picture-with-text.component';

describe('PictureWithTextComponent', () => {
  let component: PictureWithTextComponent;
  let fixture: ComponentFixture<PictureWithTextComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PictureWithTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureWithTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
