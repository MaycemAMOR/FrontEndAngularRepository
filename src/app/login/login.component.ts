import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = "amor"
  password = ""
  errorMessage = "Invalid Credentials"
  invalidLogin = false
  // router 
  //Angular giveMeRouter()
  //Dependency Injection

  constructor(private router: Router,
    private hardcodedAuthenticationService: HardcodedAuthenticationService,
    private basicAuthenticationService: BasicAuthenticationService) { }

  ngOnInit() {
  }

  handlelogin() {
    console.log(this.username);
    console.log(this.password);
    // if(this.username ==="amor" && this.password === "maycem"){
    if (this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
      //redirect to welcome page
      this.router.navigate(['welcome', this.username]);

      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }

  }

  handleJWTAuthLogin() {
    console.log(this.username);
    console.log(this.password);
    this.basicAuthenticationService.executeJWTAuthenticationService(this.username, this.password)
      .subscribe(
        data => {
          console.log(data)
          this.router.navigate(['welcome', this.username])
          this.invalidLogin = false
        },
        error => {
          console.log(error)
          this.invalidLogin = true
        }
      )
  }



  handleBasicAuthLogin() {
    console.log(this.username);
    console.log(this.password);
    this.basicAuthenticationService.executeAuthenticationService(this.username, this.password)
      .subscribe(
        data => {
          console.log(data)
          this.router.navigate(['welcome', this.username])
          this.invalidLogin = false
        },
        error => {
          console.log(error)
          this.invalidLogin = true
        }
      )
  }
}
