import { Component } from '@angular/core';
import { Fase_1Page } from '../fase-1/fase-1';
import { Fase_2Page } from '../fase-2/fase-2';
import { Fase_3Page } from '../fase-3/fase-3';


@Component({
  templateUrl: 'tabs-n8.html'
})
export class TabsN_8Page {

  tab1Root = Fase_1Page;
  tab2Root = Fase_2Page;
  tab3Root = Fase_3Page;

  constructor() {

  }
}