import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBankEntityListComponent } from './data-bank-entity-list.component';

describe('DataBankEntityListComponent', () => {
  let component: DataBankEntityListComponent;
  let fixture: ComponentFixture<DataBankEntityListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataBankEntityListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBankEntityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
