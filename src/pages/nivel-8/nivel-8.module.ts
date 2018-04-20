import { NgModule } from '@angular/core';
import { IonicPageModule, IonicApp } from 'ionic-angular';
import { Nivel_8Page } from './nivel-8';
import { TabsN_8Page } from './tabs/tabs-n8';
import { Fase_1PageModule } from './fase-1/fase-1.module';
import { Fase_2PageModule } from './fase-2/fase-2.module';
import { Fase_3PageModule } from './fase-3/fase-3.module';

@NgModule({
  declarations: [
    Nivel_8Page,
    TabsN_8Page
  ],
  imports: [
    IonicPageModule.forChild(Nivel_8Page),
    Fase_1PageModule,
    Fase_2PageModule,
    Fase_3PageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    TabsN_8Page
  ],
})
export class Nivel_8PageModule {}
