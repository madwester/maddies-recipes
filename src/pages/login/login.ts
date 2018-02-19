import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, LoadingController} from 'ionic-angular';
//import { User } from "../../models/user";
import { AngularFireAuth } from "angularfire2/auth";
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  //user = {} as User;

  public email: string;
  public password: string;

  constructor(private alertCtrl: AlertController,
              //private afAuth: AngularFireAuth,
              public navCtrl: NavController,
              public authProvider: AuthProvider,
              public navParams: NavParams,
              public toastCtrl: ToastController,
              public loadingCtrl: LoadingController
              ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  submitLogin(){
    var that = this;

    //disp popup
    var loader = this.loadingCtrl.create({
    content: "Please wait"
  });
  loader.present();

  //trying to login user
  this.authProvider.loginUserService(this.email, this.password).then(authData => {
  //login was succesful
  loader.dismiss();
  that.navCtrl.setRoot('ProfilePage');
}, error => {
  loader.dismiss();
  //no success login
  let toast = this.toastCtrl.create({
    message: error,
    duration: 3000,
    position: top
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
  alert(message: string){
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  async login(user) {
    this.authProvider.login(user);
  }
  register() {
    this.navCtrl.push('RegisterPage');
  }
  */
