import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompLogInComponent } from './comp-log-in.component';

describe('CompLogInComponent', () => {
  let component: CompLogInComponent;
  let fixture: ComponentFixture<CompLogInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompLogInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompLogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
