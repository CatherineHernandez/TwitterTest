import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailGrupoComponent } from './detail-grupo.component';

describe('DetailGrupoComponent', () => {
  let component: DetailGrupoComponent;
  let fixture: ComponentFixture<DetailGrupoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailGrupoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
