import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
//import { User } from "../../models/user";
import { LoginPage } from '../login/login';
import { AuthProvider } from "../../providers/auth/auth";
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  private email: string;    

  constructor(private authProvider: AuthProvider, private afAuth: AngularFireAuth, 
  public navCtrl: NavController, public navParams: NavParams) {
    this.email = afAuth.auth.currentUser.email;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  logout(){
    this.authProvider.logout();
    this.navCtrl.setRoot('LoginPage');
  }
}
