import { Component } from '@angular/core';

import { FrenteN_7Page } from '../frente/frente-n7';
import { VersoN_7Page } from '../verso/verso-n7';

@Component({
  templateUrl: 'tabs-n7.html'
})
export class TabsN_7Page {

  tab1Root = FrenteN_7Page;
  tab2Root = VersoN_7Page;

  constructor() {

  }
}