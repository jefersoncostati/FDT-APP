import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Nivel_1Page } from './nivel-1';
import { Nivel1_aula1PageModule } from './aulas-n1/aula1-n1/aula1-n1.module';
import { Nivel1_aula2PageModule } from './aulas-n1/aula2-n1/aula2-n1.module';
import { Nivel1_aula3PageModule } from './aulas-n1/aula3-n1/aula3-n1.module';
import { Nivel1_aula4PageModule } from './aulas-n1/aula4-n1/aula4-n1.module';
import { Nivel1_aula5PageModule } from './aulas-n1/aula5-n1/aula5-n1.module';
import { Nivel1_aula6PageModule } from './aulas-n1/aula6-n1/aula6-n1.module';
import { Nivel1_aula7PageModule } from './aulas-n1/aula7-n1/aula7-n1.module';
import { Nivel1_aula8PageModule } from './aulas-n1/aula8-n1/aula8-n1.module';
import { Nivel1_aula9PageModule } from './aulas-n1/aula9-n1/aula9-n1.module';
import { Nivel1_aula10PageModule } from './aulas-n1/aula10-n1/aula10-n1.module';
import { Nivel1_aula11PageModule } from './aulas-n1/aula11-n1/aula11-n1.module';
import { Nivel1_aula12PageModule } from './aulas-n1/aula12-n1/aula12-n1.module';

@NgModule({
  declarations: [
    Nivel_1Page,
  ],
  imports: [
    IonicPageModule.forChild(Nivel_1Page),
    Nivel1_aula1PageModule,
    Nivel1_aula2PageModule,
    Nivel1_aula3PageModule,
    Nivel1_aula4PageModule,
    Nivel1_aula5PageModule,
    Nivel1_aula6PageModule,
    Nivel1_aula7PageModule,
    Nivel1_aula8PageModule,
    Nivel1_aula9PageModule,
    Nivel1_aula10PageModule,
    Nivel1_aula11PageModule,
    Nivel1_aula12PageModule
    
  ],
})
export class Nivel_1PageModule {}
