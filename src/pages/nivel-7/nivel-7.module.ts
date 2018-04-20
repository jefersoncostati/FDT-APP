import { NgModule } from '@angular/core';
import { IonicPageModule, IonicApp } from 'ionic-angular';
import { Nivel_7Page } from './nivel-7';
import { FrenteN_7PageModule } from './frente/frente-n7.module';
import { TabsN_7Page } from './tabs/tabls';
import { VersoN_7PageModule } from './verso/verso-n7.module';


@NgModule({
  declarations: [
    Nivel_7Page,
    TabsN_7Page
  ],
  imports: [
    IonicPageModule.forChild(Nivel_7Page),
    FrenteN_7PageModule,
    VersoN_7PageModule
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    TabsN_7Page
  ],
})
export class Nivel_7PageModule {}