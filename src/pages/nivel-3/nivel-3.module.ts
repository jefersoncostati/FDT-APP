import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Nivel_3Page } from './nivel-3';
import { Nivel3_aula1PageModule } from './aulas-n3/aula1-n3/aula1-n3.module';
import { Nivel3_aula2PageModule } from './aulas-n3/aula2-n3/aula2-n3.module';
import { Nivel3_aula3PageModule } from './aulas-n3/aula3-n3/aula3-n3.module';
import { Nivel3_aula4PageModule } from './aulas-n3/aula4-n3/aula4-n3.module';
import { Nivel3_aula5PageModule } from './aulas-n3/aula5-n3/aula5-n3.module';
import { Nivel3_aula6PageModule } from './aulas-n3/aula6-n3/aula6-n3.module';
import { Nivel3_aula7PageModule } from './aulas-n3/aula7-n3/aula7-n3.module';
import { Nivel3_aula8PageModule } from './aulas-n3/aula8-n3/aula8-n3.module';
import { Nivel3_aula9PageModule } from './aulas-n3/aula9-n3/aula9-n3.module';
import { Nivel3_aula10PageModule } from './aulas-n3/aula10-n3/aula10-n3.module';
import { Nivel3_aula11PageModule } from './aulas-n3/aula11-n3/aula11-n3.module';
import { Nivel3_aula12PageModule } from './aulas-n3/aula12-n3/aula12-n3.module';

@NgModule({
  declarations: [
    Nivel_3Page,
  ],
  imports: [
    IonicPageModule.forChild(Nivel_3Page),
    Nivel3_aula1PageModule,
    Nivel3_aula2PageModule,
    Nivel3_aula3PageModule,
    Nivel3_aula4PageModule,
    Nivel3_aula5PageModule,
    Nivel3_aula6PageModule,
    Nivel3_aula7PageModule,
    Nivel3_aula8PageModule,
    Nivel3_aula9PageModule,
    Nivel3_aula10PageModule,
    Nivel3_aula11PageModule,
    Nivel3_aula12PageModule
    
  ],
})
export class Nivel_3PageModule {}

