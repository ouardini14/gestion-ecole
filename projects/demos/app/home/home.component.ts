import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  
})
export class HomeComponent implements OnInit {
   isloged :Boolean = false;


  constructor(private router: Router, ) {

    let status = localStorage.getItem('isloged')
    
    if(status==="true"){
      this.isloged = true
    }else{
      this.isloged = false
    }
    
   }
  calendar(){
    this.router.navigate(['/kitchen-sink']); 
}
inscrire(){
  this.router.navigate(['/inscrire']);
}
resultat(){
  this.router.navigate(['/resultat']);
}
afficheResu(){
  this.router.navigate(['/afficheResultat'])
}
afficheFormation(){
  this.router.navigate(['formation'])
}
login(){
  this.router.navigate(['/login']);
}
  ngOnInit() {
  }
  logout(){
    this.isloged=false
    localStorage.setItem('isloged',"false")
    
  }



}

