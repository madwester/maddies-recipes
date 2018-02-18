import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { User } from "../../models/user";
import { AngularFireAuth } from "angularfire2/auth";
//import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  
  user = {} as User;

  constructor(private alertCtrl: AlertController, 
              private afAuth: AngularFireAuth, 
              public navCtrl: NavController, 
              //private authProvider: AuthProvider,
              public navParams: NavParams, 
             
              ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  
  alert(message: string){
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }
  
  /*async login(user) {
    this.authProvider.login(user);
  }*/
  
  async login(user: User) {
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

  register() {
    this.navCtrl.push('RegisterPage');
  }
}
