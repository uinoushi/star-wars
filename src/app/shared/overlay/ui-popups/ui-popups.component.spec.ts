import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiPopupsComponent } from './ui-popups.component';

describe('UiPopupsComponent', () => {
  let component: UiPopupsComponent;
  let fixture: ComponentFixture<UiPopupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiPopupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiPopupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
