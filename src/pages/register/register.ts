import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, ToastController } from 'ionic-angular';
import { User } from "../../models/user";
import { AngularFireAuth  } from "angularfire2/auth";
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  //user = {} as User;

  public name: any;
  public email: any;
  public password: any;

  constructor(private alertCtrl: AlertController,
              private afAuth: AngularFireAuth,
              private authProvider: AuthProvider,
              public navCtrl: NavController,
              public navParams: NavParams,
              public loadingCtrl: LoadingController,
              public toastCtrl: ToastController
              ) {}


doSignup(){
  var account = {
    name: this.name,
    email: this.email,
    password: this.password
  };

  var that = this;

  var loader = this.loadingCtrl.create({
    content: "Please wait",
    duration: 3000
  });
  loader.present();

  this.authProvider.signUp(account).then(authData => {
    //login was successful
    loader.dismiss();
    that.navCtrl.setRoot('ProfilePage');
  }, error => {
    let toast = this.toastCtrl.create({
      message: error,
      duration: 3000,
      position: 'top'
    });
    toast.present();

    that.password = "";
  });
}

goToLogin() {
  this.navCtrl.push('LoginPage');
}

}

/*alert(message: string){
  this.alertCtrl.create({
    title: 'Info!',
    subTitle: message,
    buttons: ['OK']
  }).present();
}

goToLogin() {
  this.navCtrl.push('LoginPage');
}

//if i wanna use provider
register(user){
  this.authProvider.register(user);
}
If i dont wanna use provider
register(user: User){
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
