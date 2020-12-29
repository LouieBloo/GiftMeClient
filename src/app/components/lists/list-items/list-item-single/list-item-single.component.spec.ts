import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListItemSingleComponent } from './list-item-single.component';

describe('ListItemSingleComponent', () => {
  let component: ListItemSingleComponent;
  let fixture: ComponentFixture<ListItemSingleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListItemSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
