import { Component, OnInit } from '@angular/core';
import * as jspdf from 'jspdf'
import swal from 'sweetalert2';

import {AngularFireStorage,AngularFireStorageReference,AngularFireUploadTask } from '@angular/fire/storage'
import {AngularFireList,AngularFireDatabase} from '@angular/fire/database'

import { Observable} from 'rxjs';

import {Router} from '@angular/router'


@Component({
  selector: 'mwl-inscrire',
  templateUrl: './inscrire.component.html',
  styleUrls: ['./inscrire.component.scss']
})
export class InscrireComponent implements OnInit {

  data = {
    nom: '',
    prenom: '',
    cin: '',
    cne: '',
    email: '',
    tele: '',
    dateN: Date.toString(),
    lieu: '',
    spes: '',
    niveaux: ''

  }

  items : Observable<any[]>;
etudList :AngularFireList<any>; 


  constructor(public db:AngularFireDatabase,public router:Router) { 
    

  }

  ngOnInit() {
  }


  insertEtud() {

    
    this.etudList = this.db.list('etudiant/'+this.data.spes+'/'+this.data.niveaux);



    if(this.data.cin === '' || this.data.cne=== '' || this.data.email === '' || this.data.lieu === '' || this.data.nom === '' || this.data.prenom === '' || this.data.tele === '' || this.data.dateN == 'function Date() { [native code] }' || this.data.dateN == ''  ){
            swal.fire({
            icon: 'error',
            title: 'erreur',
            text: 'vous devez remplir tous les information ',
            })

            console.log(this.data)
    }else{

      swal.fire(
        'succes',
        'vous êtes inscrit avec succes',
        'success'
      )
      console.log(this.data)
  
      this.etudList.push({
        nom : this.data.nom,
        prenom: this.data.prenom,
        cne:this.data.cne,
        cin:this.data.cin,
        email:this.data.email,
        tele:this.data.tele,
        dateN:this.data.dateN,
        lieu:this.data.lieu,
        spes:this.data.spes,
        niveaux:this.data.niveaux
       
  })

      this.inscriParModule()


      this.recuInscri();

    }

  }

  inscriParModule(){

    this.etudList = this.db.list('noteModule/'+this.data.spes+'/'+this.data.niveaux);

    if(this.data.spes === "GI"){
      if (this.data.niveaux ==="S1"){
        this.etudList.push({
          nom : this.data.nom,
          prenom: this.data.prenom,
          cne:this.data.cne,
          spes:this.data.spes,
          niveaux:this.data.niveaux,
          algebre: '',
          analyse: '',
          algorithmique : '',
          langageC : '',
          bureautique:'',
          francais:'',
          anglais:'',
          droit:'',
          electronique:'', 
          industri:'',
          architecture:'',
  
    })
      }

      if( this.data.niveaux==="S2"){
        this.etudList.push({
          nom : this.data.nom,
          prenom: this.data.prenom,
          cne:this.data.cne,
          vbdotnet: '',
          spes:this.data.spes,
          niveaux:this.data.niveaux,
          bdd: '',
          merise : '',
          langageCAvs : '',
          Cplus:'',
          sysExploi:'',
          reseaux:'',
          analyse2:'',
          algebre2:'',  
    })
      }

      if( this.data.niveaux==="S3"){
        this.etudList.push({
          nom : this.data.nom,
          prenom: this.data.prenom,
          spes:this.data.spes,
          niveaux:this.data.niveaux,
          cne:this.data.cne,
          devWEB: '',
          bddAVS: '',
          java : '',
          uml : '',
          devWEB2:'', 
          reseauxAVS:''

    })
      }
      if( this.data.niveaux==="S4"){
        this.etudList.push({
          nom : this.data.nom,
          prenom: this.data.prenom,
          cne:this.data.cne,
          spes:this.data.spes,
          niveaux:this.data.niveaux,
          devWEB: '',
          bddAVS: '',
          java : '',
          uml : '',
          devWEB2:'', 
          reseauxAVS:''

    })
      }

    }

  }

  recuInscri() {

    var imgData = 'data:image/jpeg;base64,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'
    var img2 = 'data:image/jpeg;base64,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'
    var doc = new jspdf()


    doc.addImage(img2, 'JPEG', 7, 10, 60, 40)
    doc.addImage(imgData, 'JPEG', 145, 10, 60, 40)

    doc.text(7, 90, 'le directeur de l`Ecole supérieur de technologie Sidi bennour attest que l`étudiant  ')
    doc.text(15, 100, 'Monsieur :   ')
    doc.text(15, 110, 'carte d`identité nationale')
    doc.text(15, 120, 'Code nationale de l`étudiat :   ')
    doc.text(15, 130, 'ne le :   ')
    doc.text(15, 140, 'est régulièrement inscrit à l`Ecole supérieur de technologie Sidi bennour ')
    doc.text(15, 150, 'pour l`année univeritaire 2020/2021')

    doc.setFont('helvetica')
    doc.setFontType('bold')
    doc.text(70, 70, 'recu d`inscription ')
    doc.text(15, 170, 'Diplome :    DUT  ' + this.data.spes)
    doc.text(15, 180, 'semestre  ' + this.data.niveaux)


    doc.text(60, 100, ' ' + this.data.nom + ' ' + this.data.prenom)
    doc.text(100, 110, ' ' + this.data.cin)
    doc.text(100, 120, ' ' + this.data.cne)
    doc.text(50, 130, ' ' + this.data.dateN + ' à ' + this.data.lieu)


    doc.save('recu dinscription.pdf')
  }

}
