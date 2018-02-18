import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { User } from '../../models/user';

@Injectable()
export class AuthService {

  constructor(private user: User, public afAuth: AngularFireAuth){
    
    /*loginUser(newEmail: string, newPassword: string): Promise<any> {
      return this.afAuth.auth.signInWithEmailAndPassword(newEmail, newPassword);
    }
    resetPassword(email: string): Promise<void> {
      return this.afAuth.auth.sendPasswordResetEmail(email);
    }
    logoutUser(): Promise<void> {
      return this.afAuth.auth.signOut();
    }
    signupUser(newEmail: string, newPassword: string): Promise<any> {
      return this.afAuth.auth.createUserWithEmailAndPassword(newEmail, newPassword);
    }*/

  }
  
  //this should know my user id when I am logged in!
  
  
  /*alert(message: string){
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present(); 
  }
  */
  /*register(user: User){
      this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
      .then(data =>{
        console.log('got data ', data);
        this.alert('Your account has successfully been registered!');
        this.navCtrl.setRoot('LoginPage');
      })
      .catch(error => {
        console.log('got an error ', error);
        this.alert(error.message);
      });
  }
  
  async login(user: User) {
      this.afAuth.auth.signInWithEmailAndPassword(this.user.email, this.user.password)
      .then( data => {
        //user is logged in
        console.log('got some data', this.afAuth.auth.currentUser); //currentUser only exist when user is logged in
        this.alert('Success! You are logged in');
        this.navCtrl.setRoot('ProfilePage');
      })
      .catch( error => {
        console.log('got an error', error);
        this.alert(error.message); //contains whatever error comes up 
      })
  }
  
  logout(){
      return this.afAuth.auth.signOut();
    }
*/
}
