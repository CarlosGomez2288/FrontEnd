import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-social-logo',
  templateUrl: './social-logo.component.html',
  styleUrls: ['./social-logo.component.css']
})
export class SocialLogoComponent implements OnInit {
  isLogged =false;

  constructor(private router:Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
  }
  login(){
    this.router.navigate(['login']);
  }

}
