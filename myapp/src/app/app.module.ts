import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Camera } from '@ionic-native/camera';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { CreatePage } from '../pages/create/create';
import { RecipesPage } from '../pages/recipes/recipes';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RecipeProvider } from '../providers/recipe/recipe';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

// Initialize Firebase
export const firebaseConfig = {
    apiKey: "AIzaSyAXQDlijCCqD292ZW-6eDpcS_adBtTKgh4",
    authDomain: "recipe-app-59abb.firebaseapp.com",
    databaseURL: "https://recipe-app-59abb.firebaseio.com",
    projectId: "recipe-app-59abb",
    storageBucket: "recipe-app-59abb.appspot.com",
    messagingSenderId: "427671201127"
};

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegisterPage,
    CreatePage,
    RecipesPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
    //AngularFireAuth
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegisterPage,
    CreatePage,
    RecipesPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RecipeProvider,
    Camera
  ]
})
export class AppModule {}
