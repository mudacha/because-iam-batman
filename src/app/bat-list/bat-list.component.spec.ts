import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatListComponent } from './bat-list.component';

describe('BatListComponent', () => {
  let component: BatListComponent;
  let fixture: ComponentFixture<BatListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
