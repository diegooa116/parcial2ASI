import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarRequerimientosComponent } from './agregar-requerimientos.component';

describe('AgregarRequerimientosComponent', () => {
  let component: AgregarRequerimientosComponent;
  let fixture: ComponentFixture<AgregarRequerimientosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarRequerimientosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarRequerimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
