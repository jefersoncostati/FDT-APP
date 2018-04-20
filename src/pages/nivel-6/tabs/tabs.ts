import { Component } from '@angular/core';

import { Frente_Page } from './../frente/frente';
import { Verso_Page } from '../verso/verso';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = Frente_Page;
  tab2Root = Verso_Page;

  constructor() {

  }
}
