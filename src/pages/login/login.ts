import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { RegisterPage } from '../register/register';
import { User } from "../../models/user";
import { AngularFireAuth } from "angularfire2/auth";
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  
  user = {} as User;

  constructor(private alertCtrl: AlertController, private afAuth: AngularFireAuth, 
  public navCtrl: NavController, public navParams: NavParams) {
  }

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
  
  async login(user: User) {
      this.afAuth.auth.signInWithEmailAndPassword(this.user.email, this.user.password)
      .then( data => {
        //user is logged in
        console.log('got some data', this.afAuth.auth.currentUser);
        this.alert('Success! You are logged in');
        this.navCtrl.setRoot(TabsPage);
      })
      .catch( error => {
        console.log('got an error', error);
        this.alert(error.message);
      })
  }
  register() {
    this.navCtrl.push(RegisterPage);
  }
}
