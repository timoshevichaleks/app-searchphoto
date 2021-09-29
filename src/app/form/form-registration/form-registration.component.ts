import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { User } from "../User";
import { FORM_ERRORS, FORM_SUCCESS, FORM_VALIDATION_MESSAGES } from "../form-data";

@Component({
  selector: 'app-form-registration',
  templateUrl: './form-registration.component.html',
  styleUrls: ['./form-registration.component.scss']
})
export class FormRegistrationComponent implements OnInit {

  formSuccess: any = FORM_SUCCESS;
  formErrors: any = FORM_ERRORS;
  validationMessages: any = FORM_VALIDATION_MESSAGES;

  email: AbstractControl;
  name: AbstractControl;
  password: AbstractControl;
  hide: boolean = true;

  userForm: FormGroup;
  private user: User = new User('', '', '');

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.buildForm()
  }

  private buildForm() {
    this.userForm = this.formBuilder.group({
      name: [this.user.name, [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
      email: [this.user.email,
        [Validators.required, Validators.pattern(/^([a-zA-Z0-9_.\-])+@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,6})$/)]],
      password: [this.user.password, Validators.required, Validators.minLength(4), Validators.maxLength(15)]
    })

    this.createControls();

    this.userForm.valueChanges.subscribe(() => this.onValueChanged())
  }

  private createControls() {
    this.name = this.userForm.controls.name;
    this.email = this.userForm.controls.email;
    this.password = this.userForm.controls.password;
  }

  public onValueChanged(): void {
    if (!this.userForm) {return}

    const form: any = this.userForm;

    const keys = Object.keys(this.formErrors)
    keys.forEach((field) => {
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && (control.dirty || control.touched) && control.invalid) {
        const message = this.validationMessages[field]

        const key = Object.keys(control.errors)
        key.forEach((res) => {
          this.formErrors[field] = message[res];
        })
      }
    })
  }

  onSubmit(form: FormGroup) {
    console.log(form.valid)
    console.log(form.invalid)
  }
}
