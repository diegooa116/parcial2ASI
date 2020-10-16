import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnteojosComponent } from './anteojos.component';

describe('AnteojosComponent', () => {
  let component: AnteojosComponent;
  let fixture: ComponentFixture<AnteojosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnteojosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnteojosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
