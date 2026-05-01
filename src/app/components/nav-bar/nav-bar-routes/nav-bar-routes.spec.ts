import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarRoutes } from './nav-bar-routes';

describe('NavBarRoutes', () => {
  let component: NavBarRoutes;
  let fixture: ComponentFixture<NavBarRoutes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavBarRoutes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarRoutes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
