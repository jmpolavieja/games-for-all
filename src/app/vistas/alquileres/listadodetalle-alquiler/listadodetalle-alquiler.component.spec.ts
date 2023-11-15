import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadodetalleAlquilerComponent } from './listadodetalle-alquiler.component';

describe('ListadodetalleAlquilerComponent', () => {
  let component: ListadodetalleAlquilerComponent;
  let fixture: ComponentFixture<ListadodetalleAlquilerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadodetalleAlquilerComponent]
    });
    fixture = TestBed.createComponent(ListadodetalleAlquilerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
