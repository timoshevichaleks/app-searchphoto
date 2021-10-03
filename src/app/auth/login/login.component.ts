import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { User } from "../models/user";
import { AuthService } from "../auth.service";
import firebase from "firebase/compat";
import UserCredential = firebase.auth.UserCredential;

@Component({
  selector: 'app-form-authorisation',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide: boolean = true;

  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              public authService: AuthService) {
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

  login(form: User) {
    const {email, password} = form;

    this.authService.userAuthorisation(email, password)
      .then((userCredential: UserCredential) => {
        const user = userCredential.user?.uid;
        console.log(user);

        // this.authService.onAuthStateChanged(() => {}).then()
      })
      .then(() => this.authService.isLoggedIn = true)
      .catch((error) => console.log(error))
  }

  logout() {
    this.authService.signOut()
      .then(() => this.authService.isLoggedIn = false);
  }
}
