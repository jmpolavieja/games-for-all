import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorBaseComponent } from './contenedor-base.component';

describe('ContenedorBaseComponent', () => {
  let component: ContenedorBaseComponent;
  let fixture: ComponentFixture<ContenedorBaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContenedorBaseComponent]
    });
    fixture = TestBed.createComponent(ContenedorBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
