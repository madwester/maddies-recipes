import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { RecipesPage } from '../recipes/recipes';
import { CreatePage } from '../create/create';
import { ProfilePage } from '../profile/profile';


@IonicPage(
{
name: ‘TabsPage’
}
)

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root: string = 'ProfilePage';
  tab2Root: string = 'RecipesPage';
  tab3Root: string = 'CreatePage';
  
  constructor() {
  }
}
