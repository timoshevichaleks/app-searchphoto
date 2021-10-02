import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAuthorisationComponent } from './form-authorisation.component';

describe('FormAuthorisationComponent', () => {
  let component: FormAuthorisationComponent;
  let fixture: ComponentFixture<FormAuthorisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAuthorisationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAuthorisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
