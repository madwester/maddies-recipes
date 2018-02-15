import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Camera } from '@ionic-native/camera';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthProvider } from '../providers/auth/auth';
import { ImageService } from '../services/image/image.service';
import { RecipesService } from '../services/recipes/recipes.service';
import { ToastService } from '../services/toast/toast.service';

// Initialize Firebase
export const FIREBASE_CONFIG = {
    apiKey: "AIzaSyAXQDlijCCqD292ZW-6eDpcS_adBtTKgh4",
    authDomain: "recipe-app-59abb.firebaseapp.com",
    databaseURL: "https://recipe-app-59abb.firebaseio.com",
    projectId: "recipe-app-59abb",
    storageBucket: "recipe-app-59abb.appspot.com",
    messagingSenderId: "427671201127"
};


@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [
    IonicApp
    ],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    AuthProvider,
    AngularFireDatabase,
    ImageService,
    RecipesService,
    ToastService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
