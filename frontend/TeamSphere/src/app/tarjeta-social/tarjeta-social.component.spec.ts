import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaSocialComponent } from './tarjeta-social.component';

describe('TarjetaSocialComponent', () => {
  let component: TarjetaSocialComponent;
  let fixture: ComponentFixture<TarjetaSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetaSocialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TarjetaSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
