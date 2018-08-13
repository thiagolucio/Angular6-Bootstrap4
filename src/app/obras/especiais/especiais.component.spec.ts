import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspeciaisComponent } from './especiais.component';

describe('EspeciaisComponent', () => {
  let component: EspeciaisComponent;
  let fixture: ComponentFixture<EspeciaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspeciaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspeciaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
