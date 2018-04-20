import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Nivel_2Page } from './nivel-2';
import { Nivel2_aula1PageModule } from './aulas-n2/aula1-n2/aula1-n2.module';
import { Nivel2_aula2PageModule } from './aulas-n2/aula2-n2/aula2-n2.module';
import { Nivel2_aula3PageModule } from './aulas-n2/aula3-n2/aula3-n2.module';
import { Nivel2_aula4PageModule } from './aulas-n2/aula4-n2/aula4-n2.module';
import { Nivel2_aula5PageModule } from './aulas-n2/aula5-n2/aula5-n2.module';
import { Nivel2_aula6PageModule } from './aulas-n2/aula6-n2/aula6-n2.module';
import { Nivel2_aula7PageModule } from './aulas-n2/aula7-n2/aula7-n2.module';
import { Nivel2_aula8PageModule } from './aulas-n2/aula8-n2/aula8-n2.module';
import { Nivel2_aula9PageModule } from './aulas-n2/aula9-n2/aula9-n2.module';
import { Nivel2_aula10PageModule } from './aulas-n2/aula10-n2/aula10-n2.module';
import { Nivel2_aula11PageModule } from './aulas-n2/aula11-n2/aula11-n2.module';
import { Nivel2_aula12PageModule } from './aulas-n2/aula12-n2/aula12-n2.module';

@NgModule({
  declarations: [
    Nivel_2Page,
  ],
  imports: [
    IonicPageModule.forChild(Nivel_2Page),
    Nivel2_aula1PageModule,
    Nivel2_aula2PageModule,
    Nivel2_aula3PageModule,
    Nivel2_aula4PageModule,
    Nivel2_aula5PageModule,
    Nivel2_aula6PageModule,
    Nivel2_aula7PageModule,
    Nivel2_aula8PageModule,
    Nivel2_aula9PageModule,
    Nivel2_aula10PageModule,
    Nivel2_aula11PageModule,
    Nivel2_aula12PageModule
    
  ],
})
export class Nivel_2PageModule {}
