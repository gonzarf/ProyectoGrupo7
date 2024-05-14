import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesplazamientosComponent } from './desplazamientos.component';

describe('DesplazamientosComponent', () => {
  let component: DesplazamientosComponent;
  let fixture: ComponentFixture<DesplazamientosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesplazamientosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DesplazamientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
