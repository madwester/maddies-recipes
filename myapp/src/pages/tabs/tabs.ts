import { Component } from '@angular/core';

import { RecipesPage } from '../recipes/recipes';
import { CreatePage } from '../create/create';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = CreatePage;
  tab2Root = RecipesPage;

  constructor() {

  }
}
