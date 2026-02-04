import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniNav } from './mininav';

describe('Login', () => {
  let component: MiniNav;
  let fixture: ComponentFixture<MiniNav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiniNav]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniNav);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
