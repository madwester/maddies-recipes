import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { User } from "../../models/user";
import { AngularFireAuth  } from "angularfire2/auth";
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as User;

  constructor(private alertCtrl: AlertController, 
              private afAuth: AngularFireAuth,
              //private authProvider: AuthProvider,
              public navCtrl: NavController, 
              public navParams: NavParams
              ) {}

  alert(message: string){
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
  /*register(user){
    this.authProvider.register(user);
  }
  */
  
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
  }

}

