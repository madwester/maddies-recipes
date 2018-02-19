import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, LoadingController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public email: string;
  public password: string;

  constructor(public navCtrl: NavController,
              public authProvider: AuthProvider,
              public navParams: NavParams,
              public toastCtrl: ToastController,
              public loadingCtrl: LoadingController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  submitLogin(){
    var that = this;
    //display popup while logging in
    var loader = this.loadingCtrl.create({
    content: "Please wait"
  });
  loader.present();

  //trying to login user
  this.authProvider.loginUser(this.email, this.password).then(authData => {
    //login was successful, no message on screen needed
    loader.dismiss();
    that.navCtrl.setRoot('ProfilePage');
  }, error => {
      loader.dismiss();
      //login was not successful, show correct error message
      let toast = this.toastCtrl.create({
        message: error,
        duration: 3000,
        position: 'top'
      });
      toast.present();
      that.password = "";
    });
  }
  //to do
  forgotPassword(){
  }
  goToRegister(){
    this.navCtrl.setRoot('RegisterPage');
  }
}
