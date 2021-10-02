import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { User } from "../models/user";
import { FormService } from "../form.service";
import firebase from "firebase/compat";
import UserCredential = firebase.auth.UserCredential;

@Component({
  selector: 'app-form-authorisation',
  templateUrl: './form-authorisation.component.html',
  styleUrls: ['./form-authorisation.component.scss']
})
export class FormAuthorisationComponent implements OnInit {

  hide: boolean = true;

  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private formService: FormService) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  hasError(controlName: string, errorName: string): boolean | undefined {
    return this.userForm.get(controlName)?.hasError(errorName);
  }

  buildForm() {
    this.userForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(/^([a-zA-Z0-9_.\-])+@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,6})$/)]],
      password: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(15)]]
    })
  }

  onSubmit(form: User) {
    const email = form.email;
    const password = form.password;
    console.log(email, password);

    this.formService.userAuthorisation(email, password)
      .then((userCredential: UserCredential) => {
        const user = userCredential.user;

        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode)
        console.log(errorMessage)
      })
  }

}
