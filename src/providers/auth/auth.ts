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

  constructor(//public http: HttpClient
              //public afAuth: AngularFireAuth,
              //public alertCtrl: AlertController,
              //public navCtrl: NavController,
              //public navParams: NavParams,
              //private user: User
              ){
              this.fireAuth = firebase.auth();
              this.userProfile = firebase.database().ref('users');
            }
    loginUserService(email: string, password: string): any{
      return this.fireAuth.signInWithEmailAndPassword(email, password);
    }
    signUpUserService(account: {}){
      return this.fireAuth.createUserWithEmailAndPassword(account['email'], account['password'])
      .then((newUser) => {
        this.fireAuth.signInWithEmailAndPassword(account['email'], account['password'])
        .then((authenticatedUser) => {
          this.userProfile.child(authenticatedUser.uid).set(account);
        });
      });
    }
  }


  //TO DO this should know my user id when I am logged in!!

  /*alert(message: string){
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }
/*
  /*register(user: User){
      this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
      .then(data =>{
        console.log('got data ', data);
        this.alert('Your account has successfully been registered!');
        this.navCtrl.push('LoginPage');
      })
      .catch(error => {
        console.log('got an error ', error);
        this.alert(error.message);
      });
  }*/

  /*async login(user: User) {
      this.afAuth.auth.signInWithEmailAndPassword(this.user.email, this.user.password)
      .then( data => {
        //user is logged in
        console.log('got some data', this.afAuth.auth.currentUser); //currentUser only exist when user is logged in
        this.alert('Success! You are logged in');
        this.navCtrl.push('ProfilePage');
      })
      .catch( error => {
        console.log('got an error', error);
        this.alert(error.message); //contains whatever error comes up
      })
  }

  logout(){
      return this.afAuth.auth.signOut();
    }*/
