import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlanetsComponent } from './add-planets.component';

describe('AddPlanetsComponent', () => {
  let component: AddPlanetsComponent;
  let fixture: ComponentFixture<AddPlanetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPlanetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPlanetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
