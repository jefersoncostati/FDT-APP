import { NgModule } from '@angular/core';
import { IonicPageModule, IonicApp } from 'ionic-angular';
import { Nivel_9Page } from './nivel-9';
import { FrenteN_9PageModule } from './frente/frente-n9.module';
import { TabsN_9Page } from './tabs/tabls';
import { VersoN_9PageModule } from './verso/verso-n9.module';


@NgModule({
  declarations: [
    Nivel_9Page,
    TabsN_9Page
  ],
  imports: [
    IonicPageModule.forChild(Nivel_9Page),
    FrenteN_9PageModule,
    VersoN_9PageModule
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    TabsN_9Page
  ],
})
export class Nivel_9PageModule {}