import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemSingleComponent } from './list-item-single.component';

describe('ListItemSingleComponent', () => {
  let component: ListItemSingleComponent;
  let fixture: ComponentFixture<ListItemSingleComponent>;

  beforeEach(async(() => {
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
