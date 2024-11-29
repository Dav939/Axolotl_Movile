import { ComponentFixture, TestBed } from '@angular/core/testing';
import { YoliPage } from './yoli.page';

describe('YoliPage', () => {
  let component: YoliPage;
  let fixture: ComponentFixture<YoliPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(YoliPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
