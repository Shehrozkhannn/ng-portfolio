import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPortfolioSectionComponent } from './main-portfolio-section.component';

describe('MainPortfolioSectionComponent', () => {
  let component: MainPortfolioSectionComponent;
  let fixture: ComponentFixture<MainPortfolioSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPortfolioSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPortfolioSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
