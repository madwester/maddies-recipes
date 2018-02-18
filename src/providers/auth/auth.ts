import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthProvider {
  
  constructor(public afAuth: AngularFireAuth){}

  //user = {} as User;

  /*logout(){
      return this.afAuth.auth.signOut();
    }*/
  
  }