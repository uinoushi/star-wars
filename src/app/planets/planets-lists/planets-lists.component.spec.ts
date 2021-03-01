import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetsListsComponent } from './planets-lists.component';

describe('PlanetsListsComponent', () => {
  let component: PlanetsListsComponent;
  let fixture: ComponentFixture<PlanetsListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetsListsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetsListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
