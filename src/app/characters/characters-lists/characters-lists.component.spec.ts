import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersListsComponent } from './characters-lists.component';

describe('CharactersListsComponent', () => {
  let component: CharactersListsComponent;
  let fixture: ComponentFixture<CharactersListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharactersListsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
