import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Events } from 'ionic-angular';
import {MemofonctionProvider} from '../../providers/memofonction/memofonction';

/**
 * Generated class for the ModiferNotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modifer-note',
  templateUrl: 'modifer-note.html',
})
export class ModiferNotePage {

 id:"";
 titre:"";
 contenu:'';
  constructor(private event:Events,private memo:MemofonctionProvider,public navCtrl: NavController, public navParams: NavParams){
    this.id=this.navParams.get("id");
    this.titre=this.navParams.get("titre");
    this.contenu=this.navParams.get("contenu");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModiferNotePage');
  }

  modifierNote(){
    this.memo.updateNote("note.db",this.titre,this.contenu,this.id).then((data)=>
    {
      this.memo.affichageMessage("Note modifiée avec succès");
      this.modifierNoteALaVue(this.id,this.titre,this.contenu);
    }).catch(erreur=>
    {
      this.memo.affichageMessage("Erreur de modification");
    });
  }

  modifierNoteALaVue(id,titre,contenu)
  {
      this.event.publish("notemodifiee",id,titre,contenu);
  }
}