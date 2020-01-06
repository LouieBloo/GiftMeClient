import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureWithTextSmallComponent } from './picture-with-text-small.component';

describe('PictureWithTextSmallComponent', () => {
  let component: PictureWithTextSmallComponent;
  let fixture: ComponentFixture<PictureWithTextSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PictureWithTextSmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureWithTextSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
