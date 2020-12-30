import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListItemContainerComponent } from './list-item-container.component';

describe('ListItemContainerComponent', () => {
  let component: ListItemContainerComponent;
  let fixture: ComponentFixture<ListItemContainerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListItemContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
