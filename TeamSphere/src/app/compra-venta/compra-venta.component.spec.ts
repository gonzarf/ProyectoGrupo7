import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraVentaComponent } from './compra-venta.component';

describe('CompraVentaComponent', () => {
  let component: CompraVentaComponent;
  let fixture: ComponentFixture<CompraVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompraVentaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompraVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
