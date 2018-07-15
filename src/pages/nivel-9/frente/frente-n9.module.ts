import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FrenteN_9Page } from './frente-n9';
import { Nivel9_aula1PageModule } from './aulas-n9/aula1-n9/aula1-n9.module';
import { Nivel9_aula2PageModule } from './aulas-n9/aula2-n9/aula2-n9.module';
import { Nivel9_aula3PageModule } from './aulas-n9/aula3-n9/aula3-n9.module';
import { Nivel9_aula4PageModule } from './aulas-n9/aula4-n9/aula4-n9.module';
import { Nivel9_aula5PageModule } from './aulas-n9/aula5-n9/aula5-n9.module';
import { Nivel9_aula6PageModule } from './aulas-n9/aula6-n9/aula6-n9.module';
import { Nivel9_aula7PageModule } from './aulas-n9/aula7-n9/aula7-n9.module';
import { Nivel9_aula8PageModule } from './aulas-n9/aula8-n9/aula8-n9.module';
import { Nivel9_aula9PageModule } from './aulas-n9/aula9-n9/aula9-n9.module';
import { Nivel9_aula10PageModule } from './aulas-n9/aula10-n9/aula10-n9.module';
import { Nivel9_aula11PageModule } from './aulas-n9/aula11-n9/aula11-n9.module';
import { Nivel9_aula12PageModule } from './aulas-n9/aula12-n9/aula12-n9.module';

@NgModule({
  declarations: [
    FrenteN_9Page,
  ],
  imports: [
    IonicPageModule.forChild(FrenteN_9Page),
    Nivel9_aula1PageModule,
    Nivel9_aula2PageModule,
    Nivel9_aula3PageModule,
    Nivel9_aula4PageModule,
    Nivel9_aula5PageModule,
    Nivel9_aula6PageModule,
    Nivel9_aula7PageModule,
    Nivel9_aula8PageModule,
    Nivel9_aula9PageModule,
    Nivel9_aula10PageModule,
    Nivel9_aula11PageModule,
    Nivel9_aula12PageModule
    
  ],
})
export class FrenteN_9PageModule {}