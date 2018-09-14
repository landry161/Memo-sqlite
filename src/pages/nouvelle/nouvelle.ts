import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Events } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import {MemofonctionProvider} from '../../providers/memofonction/memofonction';

/**
 * Generated class for the NouvellePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nouvelle',
  templateUrl: 'nouvelle.html',
})
export class NouvellePage {

  Note={id:'',titre:'',contenu:''}
  constructor(private memo:MemofonctionProvider,private evenement: Events, private DB:SQLite,public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad()
  {
    console.log('ionViewDidLoad NouvellePage');
  }

  //Ajout d'une note
  insererNote()
  {
    this.memo.insertNote("note.db",this.Note.titre,this.Note.contenu).then((data)=>
    {
      this.memo.affichageMessage("Note ajoutée avec succès");
      //alert("Contenu ID "+data+" titre= "+this.Note.titre+" Contenu = "+this.Note.contenu)
      this.ajouterNoteALaVue(data,this.Note.titre,this.Note.contenu);
      this.viderNote();
    }).catch(erreur=>
    {
      this.memo.affichageMessage("Erreur d'insertion");
    });
  }

  viderNote(){
    this.Note.id="";
    this.Note.titre="";
    this.Note.contenu="";
  }

  ajouterNoteALaVue(id,titre,contenu)
  {
    this.evenement.publish("noteajoutee",id,titre,contenu);
  }
}