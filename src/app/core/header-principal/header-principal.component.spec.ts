import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPrincipalComponent } from './header-principal.component';

describe('HeaderPrincipalComponent', () => {
  let component: HeaderPrincipalComponent;
  let fixture: ComponentFixture<HeaderPrincipalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderPrincipalComponent]
    });
    fixture = TestBed.createComponent(HeaderPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
