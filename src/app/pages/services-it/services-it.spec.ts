import { ComponentFixture, TestBed } from '@angular/core/testing';

import ServicesIT from './services-it';

describe('Services', () => {
  let component: ServicesIT;
  let fixture: ComponentFixture<ServicesIT>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesIT]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ServicesIT);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
