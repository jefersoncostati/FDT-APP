import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Nivel_1PageModule } from '../pages/nivel-1/nivel-1.module';
import { Nivel_2PageModule } from '../pages/nivel-2/nivel-2.module';
import { Nivel_3PageModule } from '../pages/nivel-3/nivel-3.module';
import { Nivel_4PageModule } from '../pages/nivel-4/nivel-4.module';
import { Nivel_5PageModule } from '../pages/nivel-5/nivel-5.module';
import { Nivel_6PageModule } from '../pages/nivel-6/nivel-6.module';
import { Nivel_7PageModule } from '../pages/nivel-7/nivel-7.module';
import { Nivel_8PageModule } from '../pages/nivel-8/nivel-8.module';
import { Nivel_9PageModule } from '../pages/nivel-9/nivel-9.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    Nivel_1PageModule,
    Nivel_2PageModule,
    Nivel_3PageModule,
    Nivel_4PageModule,
    Nivel_5PageModule,
    Nivel_6PageModule,
    Nivel_7PageModule,
    Nivel_8PageModule,
    Nivel_9PageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
