import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureWithTextComponent } from './picture-with-text.component';

describe('PictureWithTextComponent', () => {
  let component: PictureWithTextComponent;
  let fixture: ComponentFixture<PictureWithTextComponent>;

  beforeEach(async(() => {
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
