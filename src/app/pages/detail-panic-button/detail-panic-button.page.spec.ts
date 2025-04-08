import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailPanicButtonPage } from './detail-panic-button.page';

describe('DetailPanicButtonPage', () => {
  let component: DetailPanicButtonPage;
  let fixture: ComponentFixture<DetailPanicButtonPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPanicButtonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
