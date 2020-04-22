import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientesDashboardComponent } from './pacientes-dashboard.component';

describe('PacientesDashboardComponent', () => {
  let component: PacientesDashboardComponent;
  let fixture: ComponentFixture<PacientesDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacientesDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacientesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
