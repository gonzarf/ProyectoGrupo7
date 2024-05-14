import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AparcamientoComponent } from './aparcamiento.component';

describe('AparcamientoComponent', () => {
  let component: AparcamientoComponent;
  let fixture: ComponentFixture<AparcamientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AparcamientoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AparcamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
