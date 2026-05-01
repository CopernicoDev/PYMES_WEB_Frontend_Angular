import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarButtons } from './nav-bar-buttons';

describe('NavBarButtons', () => {
  let component: NavBarButtons;
  let fixture: ComponentFixture<NavBarButtons>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavBarButtons]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarButtons);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
