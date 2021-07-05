import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IWantYouComponent } from './i-want-you.component';

describe('IWantYouComponent', () => {
  let component: IWantYouComponent;
  let fixture: ComponentFixture<IWantYouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IWantYouComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IWantYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
