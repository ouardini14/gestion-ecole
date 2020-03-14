import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, AngularFireList, } from '@angular/fire/database';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import swal from 'sweetalert2';
import $ from "jquery";

@Component({
  selector: 'mwl-affiche-result',
  templateUrl: './affiche-result.component.html',
  styleUrls: ['./affiche-result.component.scss']
})
export class AfficheResultComponent implements OnInit {
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

  supri( $key){
    swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this.etudlist.remove($key);
        this.etudArra =  [];    
        swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })

  }


  afficheEtud(){   
    $("#e").css({"padding-top": "4%",})
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




  validS1(){
   

    this.data.algebre
    this.data.analyse
    this.data.algorithmique
    this.data.langageC 
    this.data.bureautique
    this.data.francais
    this.data.anglais
    this.data.droit
    this.data.electronique 
    this.data.industri
    this.data.architecture

    this.etudlist = this.db.list('noteModule/'+this.data.spes+'/'+this.data.niveaux);

console.log(this.data.nom);



this.etudlist.update(this.data.key,{

  algebre: this.data.algebre,
  analyse: this.data.analyse,
  algorithmique :this.data.algorithmique,
  langageC : this.data.langageC,
  bureautique:this.data.bureautique,
  francais:this.data.francais,
  anglais:this.data.anglais,
  droit:this.data.droit,
  electronique:this.data.electronique, 
  industri:this.data.industri,
  architecture:this.data.architecture,
})
swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Your work has been saved',
  showConfirmButton: false,
  timer: 1000
})

  this.etudArra = []



  
}

validS2(){
   
  this.data. bdd
  this.data.  merise 
  this.data.  langageCAvs 
  this.data.  Cplus
  this.data.  sysExploi
  this.data.  reseaux
  this.data. analyse2
  this.data. algebre2
this.data.  vbdotnet

  this.etudlist = this.db.list('noteModule/'+this.data.spes+'/'+this.data.niveaux);

console.log(this.data.nom);



this.etudlist.update(this.data.key,{

  bdd:  this.data. bdd,
  vbdotnet: this.data.vbdotnet,
  merise:  this.data.  merise ,
  langageCAvs:  this.data.  langageCAvs ,
  Cplus:  this.data.  Cplus,
  sysExploi:  this.data.  sysExploi,
  reseaux:  this.data.  reseaux,
  analyse2:   this.data. analyse2,
  algebre2:  this.data. algebre2,

})



swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Your work has been saved',
  showConfirmButton: false,
  timer: 1000
})

this.etudArra = []
}

validS3(){
  this.data. devWEB
  this.data.  bddAVS
  this.data.  java 
  this.data.  uml 
  this.data.  devWEB2
  this.data. reseauxAVS

  this.etudlist = this.db.list('noteModule/'+this.data.spes+'/'+this.data.niveaux);

console.log(this.data.nom);



this.etudlist.update(this.data.key,{

  devWEB: this.data.devWEB,
  bddAVS: this.data.bddAVS,
  java : this.data.java,
  uml : this.data.uml,
  devWEB2:this.data.devWEB2, 
  reseauxAVS:this.data.reseauxAVS

})

swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Your work has been saved',
  showConfirmButton: false,
  timer: 1000
})


this.etudArra = []
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
