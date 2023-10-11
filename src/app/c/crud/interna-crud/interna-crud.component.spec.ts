import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternaCrudComponent } from './interna-crud.component';

describe('InternaCrudComponent', () => {
  let component: InternaCrudComponent;
  let fixture: ComponentFixture<InternaCrudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InternaCrudComponent]
    });
    fixture = TestBed.createComponent(InternaCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
