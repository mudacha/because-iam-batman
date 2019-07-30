import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatItemComponent } from './bat-item.component';

describe('BatItemComponent', () => {
  let component: BatItemComponent;
  let fixture: ComponentFixture<BatItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
