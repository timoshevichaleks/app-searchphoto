import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../auth.service";
import { User } from "../models/user";
import firebase from "firebase/compat";
import UserCredential = firebase.auth.UserCredential;


@Component({
  selector: 'app-form-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  hide: boolean = true;

  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              public authService: AuthService
              ) {
  }

  ngOnInit(): void {
    this.buildForm();
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

  registration(form: User): void {
    const email = form.email;
    const password = form.password;
    console.log(email, password);

    this.authService.createUser(email, password)
      .then((userCredential: UserCredential) => {
        const user = userCredential.user;

        console.log(user)
      })
      .then(() => this.authService.isLoggedIn = true)
      .catch((error) => console.log(error.errorMessage))
  }

  logout() {
    this.authService.signOut()
      .then(() => this.authService.isLoggedIn = false)
  }
}
