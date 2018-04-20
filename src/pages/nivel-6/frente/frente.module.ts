import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Frente_Page } from './frente';

import { Nivel6_aula1PageModule } from './aulas-n6/aula1-n6/aula1-n6.module';
import { Nivel6_aula2PageModule } from './aulas-n6/aula2-n6/aula2-n6.module';
import { Nivel6_aula3PageModule } from './aulas-n6/aula3-n6/aula3-n6.module';
import { Nivel6_aula4PageModule } from './aulas-n6/aula4-n6/aula4-n6.module';
import { Nivel6_aula5PageModule } from './aulas-n6/aula5-n6/aula5-n6.module';
import { Nivel6_aula6PageModule } from './aulas-n6/aula6-n6/aula6-n6.module';
import { Nivel6_aula7PageModule } from './aulas-n6/aula7-n6/aula7-n6.module';
import { Nivel6_aula8PageModule } from './aulas-n6/aula8-n6/aula8-n6.module';
import { Nivel6_aula9PageModule } from './aulas-n6/aula9-n6/aula9-n6.module';
import { Nivel6_aula10PageModule } from './aulas-n6/aula10-n6/aula10-n6.module';
import { Nivel6_aula11PageModule } from './aulas-n6/aula11-n6/aula11-n6.module';
import { Nivel6_aula12PageModule } from './aulas-n6/aula12-n6/aula12-n6.module';


@NgModule({
  declarations: [
    Frente_Page,

  ],
  imports: [
    IonicPageModule.forChild(Frente_Page),
    Nivel6_aula1PageModule,
    Nivel6_aula2PageModule,
    Nivel6_aula3PageModule,
    Nivel6_aula4PageModule,
    Nivel6_aula5PageModule,
    Nivel6_aula6PageModule,
    Nivel6_aula7PageModule,
    Nivel6_aula8PageModule,
    Nivel6_aula9PageModule,
    Nivel6_aula10PageModule,
    Nivel6_aula11PageModule,
    Nivel6_aula12PageModule
  ],
})
export class Frente_PageModule {}
