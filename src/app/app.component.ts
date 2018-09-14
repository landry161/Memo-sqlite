import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import {MemofonctionProvider} from '../providers/memofonction/memofonction';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(private memo:MemofonctionProvider,platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() =>
    {
      this.memo.initializeDB("note.db").then((res)=>{
        this.memo.affichageMessage("Base de données ajoutée avec succès");
      }).catch(erreur=>
      {
      })
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}