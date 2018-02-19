//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
//import { AngularFireAuth } from 'angularfire2/auth';
//import { User } from '../../models/user';

import * as firebase from 'firebase';

@Injectable()
export class AuthProvider {

  public data: any;
  public fireAuth: any;
  public userProfile: any;

  constructor(){
              this.fireAuth = firebase.auth();
              this.userProfile = firebase.database().ref('users');
            }
    loginUser(email: string, password: string): any{
      return this.fireAuth.signInWithEmailAndPassword(email, password);
    }
    signUp(account: {}){
      return this.fireAuth.createUserWithEmailAndPassword(account['email'], account['password'])
      .then((newUser) => {
        this.fireAuth.signInWithEmailAndPassword(account['email'], account['password'])
        .then((authenticatedUser) => {
          this.userProfile.child(authenticatedUser.uid).set(account);
        });
      });
    }
  }
