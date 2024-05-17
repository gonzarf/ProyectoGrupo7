import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortBarComponent } from './sort-bar.component';

describe('SortBarComponent', () => {
  let component: SortBarComponent;
  let fixture: ComponentFixture<SortBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SortBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SortBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
