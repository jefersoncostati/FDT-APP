import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Nivel_4Page } from './nivel-4';
import { Nivel4_aula1PageModule } from './aulas-n4/aula1-n4/aula1-n4.module';
import { Nivel4_aula2PageModule } from './aulas-n4/aula2-n4/aula2-n4.module';
import { Nivel4_aula3PageModule } from './aulas-n4/aula3-n4/aula3-n4.module';
import { Nivel4_aula4PageModule } from './aulas-n4/aula4-n4/aula4-n4.module';
import { Nivel4_aula5PageModule } from './aulas-n4/aula5-n4/aula5-n4.module';
import { Nivel4_aula6PageModule } from './aulas-n4/aula6-n4/aula6-n4.module';
import { Nivel4_aula7PageModule } from './aulas-n4/aula7-n4/aula7-n4.module';
import { Nivel4_aula8PageModule } from './aulas-n4/aula8-n4/aula8-n4.module';
import { Nivel4_aula9PageModule } from './aulas-n4/aula9-n4/aula9-n4.module';
import { Nivel4_aula10PageModule } from './aulas-n4/aula10-n4/aula10-n4.module';
import { Nivel4_aula11PageModule } from './aulas-n4/aula11-n4/aula11-n4.module';
import { Nivel4_aula12PageModule } from './aulas-n4/aula12-n4/aula12-n4.module';

@NgModule({
  declarations: [
    Nivel_4Page,
  ],
  imports: [
    IonicPageModule.forChild(Nivel_4Page),
    Nivel4_aula1PageModule,
    Nivel4_aula2PageModule,
    Nivel4_aula3PageModule,
    Nivel4_aula4PageModule,
    Nivel4_aula5PageModule,
    Nivel4_aula6PageModule,
    Nivel4_aula7PageModule,
    Nivel4_aula8PageModule,
    Nivel4_aula9PageModule,
    Nivel4_aula10PageModule,
    Nivel4_aula11PageModule,
    Nivel4_aula12PageModule
    
  ],
})
export class Nivel_4PageModule {}
