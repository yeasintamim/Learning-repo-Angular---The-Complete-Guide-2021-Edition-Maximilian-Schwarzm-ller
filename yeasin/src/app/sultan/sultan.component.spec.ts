import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SultanComponent } from './sultan.component';

describe('SultanComponent', () => {
  let component: SultanComponent;
  let fixture: ComponentFixture<SultanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SultanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SultanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
