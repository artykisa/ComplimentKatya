import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatPictureComponent } from './cat-picture.component';

describe('CatPictureComponent', () => {
  let component: CatPictureComponent;
  let fixture: ComponentFixture<CatPictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatPictureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
