import { Component } from '@angular/core';
import { NavController,LoadingController,Events } from 'ionic-angular';
import {NouvellePage} from '../../pages/nouvelle/nouvelle';
import {ModiferNotePage} from '../../pages/modifer-note/modifer-note';
import {MemofonctionProvider} from '../../providers/memofonction/memofonction';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage
{
  mesNotes:Array<Object>;
  constructor(private event:Events,private memo:MemofonctionProvider,private chargement:LoadingController,public navCtrl: NavController)
  {
    this.listeDesNotes();
    this.event.subscribe("noteajoutee",(id,titre,contenu)=>
    {
      this.mesNotes.push({
        id:id,
        titre:titre,
        contenu:contenu
      })
    });

    this.event.subscribe("notemodifiee",(id,titre,contenu)=>{
      for (let index = 0; index < this.mesNotes.length; index++)
      {
        if(this.mesNotes[index]['id']==id){
          this.mesNotes[index]["titre"]=titre;
          this.mesNotes[index]["contenu"]=contenu;
        }
      }
    });
  }
 
  //Affichage de la page
  NouvelleNote()
  {
    this.navCtrl.push(NouvellePage,{});
  }

  supprimer(resultat)
  {
    this.memo.deleteNote("note.db",resultat.id).then(()=>{
      this.memo.affichageMessage("Note supprimée avec succès");
      this.mesNotes.splice(this.mesNotes.indexOf(resultat),1);
    }).catch(erreur=>{
      this.memo.affichageMessage("Erreur de suppression");
    });
  }  

  details(resultat){
    this.navCtrl.push(ModiferNotePage,{id:resultat.id,titre:resultat.titre,contenu:resultat.contenu});
  }

  listeDesNotes()
  {
     let charger=this.chargement.create({
       content:''
     })
     charger.present();
     this.memo.selectNote("note.db").then((data)=>
     {
      this.mesNotes=<Array<Object>>data;
      charger.dismiss();
     }).catch(erreur=>
    {
      this.memo.affichageMessage("Erreur d'affichage");
      charger.dismiss();

     });
  }
}