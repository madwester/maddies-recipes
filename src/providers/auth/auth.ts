import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthProvider {
  
  constructor(public afAuth: AngularFireAuth){}

logout(){
      return this.afAuth.auth.signOut();
    }
}