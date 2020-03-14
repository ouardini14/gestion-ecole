import { Component, OnInit } from '@angular/core';
import $ from "jquery";
declare const fireb_app: any;
declare const fireb_storage: any;
declare const fireb_auth: any;
declare const fireb_data: any;
declare const sweet_alert: any;
declare const alert_field: any;
declare const set: any;
@Component({
  selector: 'mwl-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {

  constructor() {  
 }
g:string

  n:string;
  ngOnInit() {
    this.n="GI"
    this.s1();
  }

  
  
  gi(){    this.n="GI";
}
  tm(){    this.n="TM";
}
  
s1(){   fireb_app();
  fireb_auth();
  fireb_storage(); 
  fireb_data();
  
  $( "#s" ).empty();
  switch(this.n) { 
  case "GI": { 
    $("#s").append('<table border="1" width="596" cellspacing="0" cellpadding="0"> <tbody> <tr> <td width="62"> <p align="center"><strong>Module</strong></p></td> <td width="204"><p align="center"><strong>Intitulé du module</strong></p></td> <td width="331"><p align="center"><strong>Matières</strong></p></td> </tr> <tr> <td width="62"><strong>M1</strong></td> <td width="204">Langues et Communication</td> <td width="331"><ul><li>Français</li><li>Anglais</li><li>Terminologie d’entreprise</li></ul></td> </tr> <tr> <td width="62"><strong>M2</strong></td> <td width="204">Mathématiques 1</td> <td width="331"><ul><li>Analyse 1</li><li>Algèbre 1</li></ul></td> </tr> <tr> <td width="62"><strong>M3</strong></td> <td width="204">physique pour l informatique</td> <td width="331"><ul><li>Electronique</li><li>Architecture des Ordinateurs</li><li>informatique industrielle</li></ul></td> </tr> <tr> <td width="62"><strong>M4</strong></td> <td width="204"><div> <div>Algorithme&nbsp;et&nbsp;Programmation&nbsp;C</div> </div></td> <td width="331"><ul><li>Algorithmique</li><li>Programmation C</li></ul></td> </tr> </tbody></table>');
   
    set("GI","S1");
     break; 
  } 
  case  "TM": { 
    $("#s").append('    <table border="1" width="596" cellspacing="0" cellpadding="0"><tbody><tr><td width="62"><p align="center"><strong>Module</strong></p></td><td width="204"><p align="center"><strong>Intitulé du module</strong></p></td><td width="331"><p align="center"><strong>Matières</strong></p></td></tr><tr><td width="62"><strong>M1</strong></td><td width="204">Langues et Techniques d’Expression et de Communication (TEC)</td><td width="331"><ul><li>TEC</li><li>Français</li><li>Anglais</li><li>Terminologie d’entreprise (en Arabe)</li></ul></td></tr><tr><td width="62"><strong>M2</strong></td><td width="204">Environnement économique et juridique de l’entreprise</td><td width="331"><ul><li>Economie générale</li><li>Organisation</li><li>Introduction à l’Etude de Droit</li></ul></td></tr><tr><td width="62"><strong>M3</strong></td><td width="204">Techniques comptables et financières</td><td width="331"><ul><li>Comptabilité des opérations courantes</li><li>Mathématiques financières</li></ul></td></tr><tr><td width="62"><strong>M4</strong></td><td width="204">Mathématiques et Informatique de base</td><td width="331"><ul><li>Bases de l’informatique et Programmation VB1</li><li>Mathématiques Appliquées</li></ul></td></tr></tbody></table>');
    set("TM","S1");

    break; 
  } 
 
} 
}

s2(){ 
  fireb_app();
  fireb_auth();
  fireb_storage(); 
  fireb_data();
  
  $( "#s" ).empty();
  switch(this.n) { 
  case "GI": { 
    $("#s").append('<table border="1" width="596" cellspacing="0" cellpadding="0"> <tbody> <tr> <td width="62"> <p align="center"><strong>Module</strong></p></td> <td width="204"><p align="center"><strong>Intitulé du module</strong></p></td> <td width="331"><p align="center"><strong>Matières</strong></p></td> </tr> <tr> <td width="62"><strong>M1</strong></td> <td width="204">Structure de données et Programmation C++</td> <td width="331"><ul><li>Programmation C++</li><li>Structure de données</li></ul></td> </tr> <tr> <td width="62"><strong>M2</strong></td> <td width="204">Mathématiques 2</td> <td width="331"><ul><li>Analyse 2</li><li>Algèbre 2</li></ul></td> </tr> <tr> <td width="62"><strong>M3</strong></td> <td width="204"><div> <div>Syst&egrave;me&nbsp;d&rsquo;Exploitation&nbsp;et&nbsp;R&eacute;seau&nbsp;Informatique</div> </div></td> <td width="331"><ul><li>Système d’Exploitation</li><li>Réseau Informatique</li></ul></td> </tr> <tr> <td width="62"><strong>M4</strong></td> <td width="204"><div> <div><p>bases de donn&eacute;es et outils logiciels</p></div> </div></td> <td width="331"><ul><li>Introduction au BDD</li><li>VB.net</li><li>Merise</li></ul></td> </tr> </tbody></table>');
    set("GI","S2");

     break; 
  } 
  case  "TM": { 
    $("#s").append('<table border="1" width="587" cellspacing="0" cellpadding="0"><tbody><tr><td width="62"><p align="center"><strong>Module</strong></p></td><td width="204"><p align="center"><strong>Intitulé du module</strong></p></td><td width="321"><p align="center"><strong>Matières</strong></p></td></tr><tr><td width="62"><p align="center"><strong>M5</strong></p></td><td width="204">Langues et TEC</td><td width="321"><ul><li>TEC</li><li>Français</li><li>Anglais</li><li>Motricité et activité de découverte</li></ul></td></tr><tr><td width="62"><p align="center"><strong>M6</strong></p></td><td width="204">Comptabilité et droit d’entreprise</td><td width="321"><ul><li>Travaux d’inventaire et logiciels</li><li>Droit des Affaires</li><li>Droit Social</li></ul></td></tr><tr><td width="62"><p align="center"><strong>M7</strong></p></td><td width="204">Démarche Marketing</td><td width="321"><ul><li>Marketing Fondamental</li><li>Marketing Opérationnel</li><li>Initiation aux techniques d’enquête</li></ul></td></tr><tr><td width="62"><p align="center"><strong>M8</strong></p></td><td width="204">Statistique et Informatique</td><td width="321"><ul><li>Programmation VB 2</li><li>Statistique descriptive</li><li>Logiciels spécialisés</li><li>Stage d’initiation</li></ul></td></tr></tbody></table>');
    set("TM","S2");

    break; 
  } 
 
} 
}

s3(){ 
  fireb_app();
  fireb_auth();
  fireb_storage(); 
  fireb_data();
  
  $( "#s" ).empty();
  switch(this.n) { 
  case "GI": { 
    $("#s").append('<table border="1" width="596" cellspacing="0" cellpadding="0"> <tbody> <tr> <td width="62"> <p align="center"><strong>Module</strong></p></td> <td width="204"><p align="center"><strong>Intitulé du module</strong></p></td> <td width="331"><p align="center"><strong>Matières</strong></p></td> </tr> <tr> <td width="62"><strong>M1</strong></td> <td width="204">Programmation Objet Avancée</td> <td width="331"><ul><li>Programmation en Java</li></ul></td> </tr> <tr> <td width="62"><strong>M2</strong></td> <td width="204"><p>r&eacute;seaux&nbsp;avanc&eacute;s&nbsp;et&nbsp;developpement&nbsp;Web</p></td> <td width="331"><ul><li>r&eacute;seaux avanc&eacute;s</li><li>developpement Web</li></ul></td> </tr> <tr> <td width="62"><strong>M3</strong></td> <td width="204">Bases de données avancées Oracle</td> <td width="331"><ul><li>Bases de données avancée</li></ul></td> </tr> <tr> <td width="62"><strong>M4</strong></td> <td width="204">Web 2 et UML</td> <td width="331"><ul><li>Conception UML</li><li>Web 2</li></ul></td> </tr> </tbody></table>');
    set("GI","S3");
     break; 
  } 
  case  "TM": { 
    $("#s").append('<table border="1" width="587" cellspacing="0" cellpadding="0"><tbody><tr><td width="68"><p align="center"><strong>Module</strong></p></td><td width="198"><p align="center"><strong>Intitulé du module</strong></p></td><td width="321"><p align="center"><strong>Matières</strong></p></td></tr><tr><td width="68"><strong>M09</strong></td><td width="198">Langues et PAVA (Préparation à la Vie Active)</td><td width="321"><ul><li>Anglais professionnel</li><li>Espagnol</li><li>PAVA</li></ul></td></tr><tr><td width="68"><strong>M10</strong></td><td width="198">&nbsp;<p></p><p>Management</p></td><td width="321"><ul><li>Management de la Qualité</li><li>Gestion des Ressources Humaines</li><li>Psychosociologie des Organisations</li></ul></td></tr><tr><td width="68"><strong>M11</strong></td><td width="198"><p dir="RTL">Statistique, Informatique&nbsp; et Outils d’Aide à la Décision</p></td><td width="321"><ul><li>Statistique Mathématique</li><li>Bases De Données et Développement Web</li><li>Recherche Opérationnelle</li></ul></td></tr><tr><td width="68"><strong>M12</strong></td><td width="198">Comptabilité&nbsp; et Normes IAS/IFRS</td><td width="321"><ul><li>Comptabilité Approfondie</li><li>Comptabilité des Sociétés</li><li>Comptabilité Analytique</li><li>Normes IAS/IFRS</li></ul></td></tr></tbody></table>');
    set("TM","S3");

    break; 
  } 
 
} 
}

s4(){  
  fireb_app();
  fireb_auth();
  fireb_storage(); 
  fireb_data();
  
  $( "#s" ).empty();
  switch(this.n) { 
  case "GI": { 
    $("#s").append('<table border="1" width="596" cellspacing="0" cellpadding="0"> <tbody> <tr> <td width="62"> <p align="center"><strong>Module</strong></p></td> <td width="204"><p align="center"><strong>Intitulé du module</strong></p></td> <td width="331"><p align="center"><strong>Matières</strong></p></td> </tr> <tr> <td width="62"><strong>M1</strong></td> <td width="204">Langues&nbsp;et&nbsp;Gestion de projets</td> <td width="331"><ul><li>Français</li><li>Anglais</li><li>Gestion de projet</li></ul></td> </tr> <tr> <td width="62"><strong>M2</strong></td> <td width="204">IHM & multimédia</td> <td width="331"><ul><li>IHM</li><li>Multimédia</li></ul></td> </tr> <tr> <td width="62"><strong>M3</strong></td> <td width="204">Projets de Fin d’Etude (P.F.E)</td> <td width="331"><ul><li>Projets de Fin d’Etude </li></ul></td> </tr> <tr> <td width="62"><strong>M4</strong></td> <td width="204">Stage de Fin d’Etude (S.T.E)</td> <td width="331"><ul><li>Stage de Fin d’Etude</li></ul></td> </tr> </tbody></table>');
    set("GI","S4");
     break; 
  } 
  case  "TM": { 
    $("#s").append('<table border="1" width="587" cellspacing="0" cellpadding="0"><tbody><tr><td width="79"><p align="center"><strong>Module</strong></p></td><td width="187"><p align="center"><strong>Intitulé du module</strong></p></td><td width="321"><p align="center"><strong>Matières</strong></p></td></tr><tr><td width="79"><p align="center"><strong>M13</strong></p></td><td width="187">Fiscalité et Contrôle de Gestion</td><td width="321"><ul><li>Contrôle de gestion</li><li>Fiscalité</li></ul></td></tr><tr><td width="79"><p align="center"><strong>M14</strong></p></td><td width="187">&nbsp;<p></p><p dir="RTL">Gestion Financière</p></td><td width="321"><ul><li>Diagnostic Financier</li><li>Planification Financière</li><li>Finance de Marchés</li></ul></td></tr><tr><td width="79"><p align="center"><strong>M15</strong></p></td><td width="187">Projet de fin d’études</td><td width="321"></td></tr><tr><td width="79"><p align="center"><strong>M16</strong></p></td><td width="187">Stages&nbsp; de Fin d’Etude</td><td width="321"><ul><li>Stage technique</li></ul></td></tr></tbody></table>');
    set("TM","S4");
    break; 
  } 
  
} 
}

}

