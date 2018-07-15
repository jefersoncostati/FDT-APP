import { Component } from '@angular/core';

import { FrenteN_9Page } from '../frente/frente-n9';
import { VersoN_9Page } from '../verso/verso-n9';

@Component({
  templateUrl: 'tabs-n9.html'
})
export class TabsN_9Page {

  tab1Root = FrenteN_9Page;
  tab2Root = VersoN_9Page;

  constructor() {

  }
}