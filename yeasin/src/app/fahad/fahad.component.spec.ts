import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FahadComponent } from './fahad.component';

describe('FahadComponent', () => {
  let component: FahadComponent;
  let fixture: ComponentFixture<FahadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FahadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FahadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
