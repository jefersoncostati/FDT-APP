import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FrenteN_7Page } from './frente-n7';
import { Nivel7_aula1PageModule } from './aulas-n7/aula1-n7/aula1-n7.module';
import { Nivel7_aula2PageModule } from './aulas-n7/aula2-n7/aula2-n7.module';
import { Nivel7_aula3PageModule } from './aulas-n7/aula3-n7/aula3-n7.module';
import { Nivel7_aula4PageModule } from './aulas-n7/aula4-n7/aula4-n7.module';
import { Nivel7_aula5PageModule } from './aulas-n7/aula5-n7/aula5-n7.module';
import { Nivel7_aula6PageModule } from './aulas-n7/aula6-n7/aula6-n7.module';
import { Nivel7_aula7PageModule } from './aulas-n7/aula7-n7/aula7-n7.module';
import { Nivel7_aula8PageModule } from './aulas-n7/aula8-n7/aula8-n7.module';
import { Nivel7_aula9PageModule } from './aulas-n7/aula9-n7/aula9-n7.module';
import { Nivel7_aula10PageModule } from './aulas-n7/aula10-n7/aula10-n7.module';
import { Nivel7_aula11PageModule } from './aulas-n7/aula11-n7/aula11-n7.module';
import { Nivel7_aula12PageModule } from './aulas-n7/aula12-n7/aula12-n7.module';

@NgModule({
  declarations: [
    FrenteN_7Page,
  ],
  imports: [
    IonicPageModule.forChild(FrenteN_7Page),
    Nivel7_aula1PageModule,
    Nivel7_aula2PageModule,
    Nivel7_aula3PageModule,
    Nivel7_aula4PageModule,
    Nivel7_aula5PageModule,
    Nivel7_aula6PageModule,
    Nivel7_aula7PageModule,
    Nivel7_aula8PageModule,
    Nivel7_aula9PageModule,
    Nivel7_aula10PageModule,
    Nivel7_aula11PageModule,
    Nivel7_aula12PageModule
    
  ],
})
export class FrenteN_7PageModule {}