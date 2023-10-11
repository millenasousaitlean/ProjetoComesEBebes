import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternaCategoriaComponent } from './interna-categoria.component';

describe('InternaCategoriaComponent', () => {
  let component: InternaCategoriaComponent;
  let fixture: ComponentFixture<InternaCategoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InternaCategoriaComponent]
    });
    fixture = TestBed.createComponent(InternaCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
