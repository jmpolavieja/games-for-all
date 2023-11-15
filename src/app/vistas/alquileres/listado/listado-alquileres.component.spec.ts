import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoAlquileresComponent } from './listado-alquileres.component';

describe('ListadoComponent', () => {
  let component: ListadoAlquileresComponent;
  let fixture: ComponentFixture<ListadoAlquileresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadoAlquileresComponent]
    });
    fixture = TestBed.createComponent(ListadoAlquileresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
