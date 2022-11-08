import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  message: string = " vous etes deco";
  name: string;
  password: string;
  auth: AuthService;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  this.auth = this.authService;
  }

  setMessage() {
    if (this.auth.isLoggedIn) {
      this.message = 'Vous etes connecté'
    }
    else {
      this.message = 'Nom ou mot de passe incorrect';
    }

  }
  login() {
    this.message = "tentative de connexion en cours...";
    this.auth.login(this.name, this.password)
      .subscribe((isLoggedIn: Boolean) => {
        this.setMessage();
        if (isLoggedIn) {
          this.router.navigate(['/spots']);
        }
        else {
          this.router.navigate(['/login']);
        }
      });
  }
  logout(){
    this.auth.logout();
    this.message = 'Vous etes déconnecté';
  }

}
