import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import * as firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  rootPage:any = 'TabsPage';
  //rootPage: string = 'LoginPage';

  constructor(platform: Platform,
  statusBar: StatusBar,
  splashScreen: SplashScreen) {

/*
  const authObserver = afAuth.authState.subscribe( user => {
    if (user) {
      //user is logged in
      this.rootPage = 'ProfilePage';
      authObserver.unsubscribe();
    } else {
      this.rootPage = 'LoginPage';
      authObserver.unsubscribe();
    }
  });
*/
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

    });
  }


}
