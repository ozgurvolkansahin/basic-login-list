import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgCaptionComponent } from './img-caption.component';

describe('ImgCaptionComponent', () => {
  let component: ImgCaptionComponent;
  let fixture: ComponentFixture<ImgCaptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgCaptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgCaptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
