import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Searchresults } from './searchresults';

describe('Searchresults', () => {
  let component: Searchresults;
  let fixture: ComponentFixture<Searchresults>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Searchresults]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Searchresults);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
