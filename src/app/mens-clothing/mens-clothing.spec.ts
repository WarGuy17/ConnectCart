import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensClothing } from './mens-clothing';

describe('MensClothing', () => {
  let component: MensClothing;
  let fixture: ComponentFixture<MensClothing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MensClothing]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensClothing);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
