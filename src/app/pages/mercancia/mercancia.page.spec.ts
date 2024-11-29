import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MercanciaPage } from './mercancia.page';

describe('MercanciaPage', () => {
  let component: MercanciaPage;
  let fixture: ComponentFixture<MercanciaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MercanciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
