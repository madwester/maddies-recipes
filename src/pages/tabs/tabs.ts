import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';


@IonicPage()

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root ='ProfilePage';
  tab2Root ='RecipesPage';
  tab3Root ='CreatePage';
  
  constructor() {
  }
}
