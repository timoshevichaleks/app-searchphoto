import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { User } from "../models/User";
import { FORM_ERRORS, FORM_SUCCESS, FORM_VALIDATION_MESSAGES } from "../models/form-data";
import { first } from "rxjs/operators";

@Component({
  selector: 'app-form-registration',
  templateUrl: './form-registration.component.html',
  styleUrls: ['./form-registration.component.scss']
})
export class FormRegistrationComponent implements OnInit {

  formSuccess: {[key: string]: string} = FORM_SUCCESS;
  formErrors: {[key: string]: string} = FORM_ERRORS;
  validationMessages: {[key: string]: {[key: string]: string}} = FORM_VALIDATION_MESSAGES;

  firstName: AbstractControl;
  lastName: AbstractControl;
  email: AbstractControl;
  password: AbstractControl;
  hide: boolean = true;

  userForm: FormGroup;
  private user: User = new User('', '', '', '');

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.buildForm()
  }

  private buildForm() {
    this.userForm = this.formBuilder.group({
      firstName: [this.user.firstName, [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
      lastName: [this.user.lastName, [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
      email: [this.user.email,
        [Validators.required, Validators.pattern(/^([a-zA-Z0-9_.\-])+@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,6})$/)]],
      password: [this.user.password, [Validators.required, Validators.minLength(7), Validators.maxLength(15)]]
    })

    this.createControls();

    this.userForm.valueChanges.pipe(first()).subscribe(() => this.onValueChanged());
  }

  private createControls() {
    this.firstName = this.userForm.controls.firstName;
    this.lastName = this.userForm.controls.lastName;
    this.email = this.userForm.controls.email;
    this.password = this.userForm.controls.password;
  }

  public onValueChanged(): void {
    if (!this.userForm) {return}

    const form: any = this.userForm;

    const keys = Object.keys(this.formErrors)
    keys.forEach((field: string) => {
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && (control.dirty || control.touched) && control.invalid) {
        const message = this.validationMessages[field]

        const key = Object.keys(control.errors)
        key.forEach((error: string) => {
          this.formErrors[field] = message[error];
        })
      }
    })
  }

  onSubmit(form: FormGroup) {
    console.log(form.controls.firstName.value)
    console.log(form.controls.lastName.value)
    console.log(form.controls.email.value)
    console.log(form.controls.password.value)
  }
}
