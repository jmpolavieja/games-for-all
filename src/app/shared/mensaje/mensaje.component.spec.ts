import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajeComponent } from './mensaje.component';

describe('MensajeComponent', () => {
  let component: MensajeComponent;
  let fixture: ComponentFixture<MensajeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MensajeComponent]
    });
    fixture = TestBed.createComponent(MensajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
