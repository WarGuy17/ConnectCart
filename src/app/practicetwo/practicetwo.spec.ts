import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practicetwo } from './practicetwo';

describe('Practicetwo', () => {
  let component: Practicetwo;
  let fixture: ComponentFixture<Practicetwo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practicetwo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practicetwo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
