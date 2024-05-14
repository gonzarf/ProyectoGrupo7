import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterworkComponent } from './afterwork.component';

describe('AfterworkComponent', () => {
  let component: AfterworkComponent;
  let fixture: ComponentFixture<AfterworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AfterworkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AfterworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
