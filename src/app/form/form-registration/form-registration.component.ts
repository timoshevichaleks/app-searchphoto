import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-form-registration',
  templateUrl: './form-registration.component.html',
  styleUrls: ['./form-registration.component.scss']
})
export class FormRegistrationComponent implements OnInit {

  hide: boolean = true;

  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.buildForm()
  }

  private buildForm() {
    this.userForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
      lastName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
      email: ['', [Validators.required, Validators.pattern(/^([a-zA-Z0-9_.\-])+@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,6})$/)]],
      age: ['', [Validators.required, Validators.min(18), Validators.max(122)]],
      password: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(15)]]
    })
  }

  hasError(controlName: string, errorName: string): boolean | undefined {
    return this.userForm.get(controlName)?.hasError(errorName);
  }

  onSubmit(form: FormGroup) {
    console.log(form.controls.firstName.value)
    console.log(form.controls.lastName.value)
    console.log(form.controls.age.value)
    console.log(form.controls.email.value)
    console.log(form.controls.password.value)
  }
}
