import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import firebase from "firebase/compat";
import UserCredential = firebase.auth.UserCredential;

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private angularFireAuth: AngularFireAuth) {
  }

  createUser(email: string, password: string): Promise<UserCredential> {
    return this.angularFireAuth.createUserWithEmailAndPassword(email, password)
  }

  userAuthorisation(email: string, password: string): Promise<UserCredential> {
    return this.angularFireAuth.signInWithEmailAndPassword(email, password)
  }
}
