import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsScrollContainerComponent } from './lists-scroll-container.component';

describe('ListsScrollContainerComponent', () => {
  let component: ListsScrollContainerComponent;
  let fixture: ComponentFixture<ListsScrollContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListsScrollContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsScrollContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
