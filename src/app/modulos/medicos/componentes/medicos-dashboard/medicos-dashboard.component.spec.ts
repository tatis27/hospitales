import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicosDashboardComponent } from './medicos-dashboard.component';

describe('MedicosDashboardComponent', () => {
  let component: MedicosDashboardComponent;
  let fixture: ComponentFixture<MedicosDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicosDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicosDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
