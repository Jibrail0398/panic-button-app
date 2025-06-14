import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormOtherEmergencyPage } from './form-other-emergency.page';

describe('FormOtherEmergencyPage', () => {
  let component: FormOtherEmergencyPage;
  let fixture: ComponentFixture<FormOtherEmergencyPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FormOtherEmergencyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
