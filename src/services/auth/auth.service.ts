import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthService {

  constructor(public afAuth: AngularFireAuth) {
    
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
  
  logout(){
      return this.afAuth.auth.signOut();
    }

}
