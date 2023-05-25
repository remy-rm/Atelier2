import { Component,OnInit,Input } from '@angular/core';
import { Card } from './model/card.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  cards?: Card[] ;
  ngOnInit() {
    this.cards=
      [
      new Card (
       "./assets/img/mousquetaire.jpg",
       "LES TROIS MOUSQUETAIRES: D'ARTAGNAN",
       "Du Louvre au Palais de Buckingham, des bas-fonds de Paris au siège de La Rochelle… dans un Royaume divisé par les guerres de religion et menacé d’invasion par l’Angleterre, une poignée d’hommes et de femmes vont croiser leurs épées et lier leur destin à celui de la France.",
       "5 avril 2023"
     ),
     new Card (
      "./assets/img/bullet.jpg",
      "Bullets Train",
      "Coccinelle est un assassin malchanceux et particulièrement déterminé à accomplir sa nouvelle mission paisiblement après que trop d'entre elles aient déraillé. Mais le destin en a décidé autrement et l'embarque dans le train le plus rapide au monde aux côtés d'adversaires redoutables..",
      '3 aouts 2022',
      "Tout ce que j'ai appris sur les gens, je l'ai appris de Thomas"
   ),
   new Card (
    "./assets/img/kamelott.jpg",
    "KAAMELOTT – PREMIER VOLET",
    "Le tyrannique Lancelot-du-Lac et ses mercenaires saxons font régner la terreur sur le royaume de Logres. Arthur parviendra-t-il à fédérer les clans rebelles, renverser son rival, reprendre Kaamelott et restaurer la paix sur l'île de Bretagne ?",
    '24 novembre 2021',
    "Mais colonel à titre aromatique. Je vous l'ai déjà dit, c'est pour le féliciter."
    )
    ]


}
}