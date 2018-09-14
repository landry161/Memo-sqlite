import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {NouvellePage} from '../pages/nouvelle/nouvelle';
import {ModiferNotePage} from '../pages/modifer-note/modifer-note';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { MemofonctionProvider } from '../providers/memofonction/memofonction';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NouvellePage,
    ModiferNotePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NouvellePage,
    ModiferNotePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MemofonctionProvider,
  ]
})
export class AppModule {}
