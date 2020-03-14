import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, AngularFireList, } from '@angular/fire/database';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import swal from 'sweetalert2';

@Component({
  selector: 'mwl-afficheetud',
  templateUrl: './afficheetud.component.html',
  styleUrls: ['./afficheetud.component.scss']
})
export class AfficheetudComponent implements OnInit {

  etudlist: AngularFireList<any>
  isSearch = false;
  etudArra = []

  data={
    key: '',
    nom : '',
    prenom: '',
    cne:'',
    spes:'',
    niveaux:'',
    algebre: '',
    analyse: '',
    algorithmique :'',
    langageC : '',
    bureautique:'',
    francais:'',
    anglais:'',
    droit:'',
    electronique:'',
    industri:'',
    architecture:'',
    devWEB: '',
    bddAVS: '',
    java : '',
    uml : '',
    devWEB2:'',
    reseauxAVS:'',
    vbdotnet: '',
    bdd: '',
    merise : '',
    langageCAvs : '',
    Cplus:'',
    sysExploi:'',
    reseaux:'',
    analyse2:'',
    algebre2:''
  
   
  }





  constructor(public db:AngularFireDatabase,config: NgbModalConfig, private modalService: NgbModal) { 

    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit() {
  }


  openS1(contS1){

    if(this.data.niveaux==="S1"){
      this.modalService.open(contS1);
    }
  }

  openS2(contS2){

    if(this.data.niveaux==="S2"){
      this.modalService.open(contS2);
    }
  }
  openS3(contS3){

    if(this.data.niveaux==="S3"){


      this.modalService.open(contS3);
    }
  }
  openS4(contS4){

    if(this.data.niveaux==="S4"){
      this.modalService.open(contS4);
    }
  }

 

  afficheEtud(){   
    this.etudlist = this.db.list('noteModule/'+this.data.spes+'/'+this.data.niveaux);
    this.etudArra = []
    this.etudlist.snapshotChanges().subscribe(actions=>{
      actions.forEach(Action=>{
       let y=  Action.payload.toJSON()
        y['$key']= Action.key
          this.etudArra.push(y as listetud)     
      })
    })

    this.isSearch=true;



  }

  editforms1($key){


for(let value of this.etudArra){
  if(value['$key']== $key){
    this.data.nom=value['nom'],
    this.data.prenom=value['prenom'],
    this.data.spes = value['spes'],
    this.data.niveaux = value['niveaux'],
    this.data.cne=value['cne'],
    this.data.algebre= value ['algebre'],
    this.data.analyse= value['analyse'],
    this.data.algorithmique = value['algorithmique'],
    this.data.langageC = value['langageC'],
    this.data.bureautique=value['bureautique'],
    this.data.francais=value['francais'],
    this.data.anglais=value['anglais'],
    this.data.droit=value['droit'],
    this.data.electronique=value['electronique'],
    this.data.industri=value['industri'],
    this.data.architecture=value['architecture'],
    this.data.key = value['$key']


    this.data.vbdotnet = value['vbdotnet']
    this.data.spes = value['spes']
    this.data.niveaux = value['niveaux']
    this.data. bdd = value['bdd']
    this.data. merise = value['merise']
    this.data. langageCAvs = value['langageCAvs']
    this.data. Cplus = value['Cplus']
    this.data. sysExploi = value['sysExploi']
    this.data. reseaux = value['reseaux']
    this.data. analyse2 = value['analyse2']
    this.data. algebre2   = value['algebre2']

    this.data.  devWEB = value['devWEB']
    this.data.  bddAVS = value['bddAVS']
    this.data.   java  = value['java']
    this.data.   uml  = value['uml']
    this.data.   devWEB2  = value['devWEB2']
    this.data.   reseauxAVS = value['reseauxAVS']
  }
}
  }

}





export class listetud{
  

  nom : String
  prenom: String
  cne:String
  spes:String
  niveaux:String
  algebre: String
  analyse: String
  algorithmique :String
  langageC : String
  bureautique:String
  francais:String
  anglais:String
  droit:String
  electronique:String
  industri:String
  architecture:String
  devWEB: String
  bddAVS: String
  java : String
  uml : String
  devWEB2:String
  reseauxAVS:String
  vbdotnet: String
  bdd: String
  merise : String
  langageCAvs : String
  Cplus:String
  sysExploi:String
  reseaux:String
  analyse2:String
  algebre2:String

}
