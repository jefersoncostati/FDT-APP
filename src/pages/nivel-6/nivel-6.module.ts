import { NgModule } from '@angular/core';
import { IonicPageModule, IonicApp } from 'ionic-angular';

import { Nivel_6Page } from './nivel-6';
import { TabsPage } from './tabs/tabs';
import { Verso_PageModule } from './verso/verso.module';
import { Frente_PageModule } from './frente/frente.module';
import { Frente_Page } from './frente/frente';
import { Verso_Page } from './verso/verso';

@NgModule({
  declarations: [
    Nivel_6Page,
    TabsPage

  ],
  imports: [
    IonicPageModule.forChild(Nivel_6Page),
    Verso_PageModule,
    Frente_PageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    TabsPage,
    Nivel_6Page,
    Frente_Page,
    Verso_Page    
  ],
})
export class Nivel_6PageModule {}
