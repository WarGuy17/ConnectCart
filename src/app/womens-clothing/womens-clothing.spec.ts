import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomensClothing } from './womens-clothing';

describe('WomensClothing', () => {
  let component: WomensClothing;
  let fixture: ComponentFixture<WomensClothing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WomensClothing]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomensClothing);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
