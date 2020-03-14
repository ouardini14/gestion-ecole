import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import{AngularFireAuth} from '@angular/fire/auth';
import swal from 'sweetalert2';


@Component({
  selector: 'mwl-connecter',
  templateUrl: './connecter.component.html',
  styleUrls: ['./connecter.component.css']
})
export class ConnecterComponent implements OnInit {

  constructor(private fire:AngularFireAuth ,public router:Router) { }

  ngOnInit() {
  }
  retourhome(){
    this.router.navigate(['/home'])
  }
  email:string = '';
  mdp:string = ''; 

  login(){
    this.fire.auth.signInWithEmailAndPassword(this.email,this.mdp)
    .then(user=>{
      swal.fire(
        'succes',
        'vous êtes connecter avec succes',
        'success'
      )
      localStorage.setItem('isloged',"true")
        this.router.navigate(['home'])
      }) .catch(error=>{
        swal.fire({
          icon: 'error',
          title: 'erreur',
          text: 'votre mot de passe ou votre email est incorecte',
          })
      });

  }
  }


