import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { API_URL } from '../app.constants';
import { AUTHENTICATED_USER } from 'src/app/app.constants';
import { TOKEN } from 'src/app/app.constants';


export class AuthenticationBean {
  constructor(public message: string) {
  }
}
@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }


  // executeAuthenticationService(username, password) {

  //   let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

  //   let headers = new HttpHeaders({
  //       Authorization: basicAuthHeaderString
  //     })

  //   return this.http.get<AuthenticationBean>(
  //     `${API_URL}/basicauth`,
  //     {headers}).pipe(
  //       map(
  //         data => {
  //           sessionStorage.setItem(AUTHENTICATED_USER, username);
  //           sessionStorage.setItem(TOKEN, basicAuthHeaderString);
  //           return data;
  //         }
  //       )
  //     );
  //   //console.log("Execute Hello World Bean Service")
  // }

  executeJWTAuthenticationService(username, password) {

    return this.http.post<any>(`${API_URL}/authenticate`, { username, password }).pipe(
      map(
        data => {
          sessionStorage.setItem(AUTHENTICATED_USER, username);
          sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
          return data;
        }
      )
    );

  }




  executeAuthenticationService(username, password) {
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })

    return this.http.get<AuthenticationBean>(`${API_URL}/basicauth`
      , { headers }
    ).pipe(
      map(
        data => {
          sessionStorage.setItem(AUTHENTICATED_USER, username);
          sessionStorage.setItem(TOKEN, basicAuthHeaderString);
          return data;
        }
      )
    );

  }

  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER);

  }

  getAuthenticatedToken() {
    if (this.getAuthenticatedUser())
      return sessionStorage.getItem(TOKEN);

  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user === null)
  }

  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER)
    sessionStorage.removeItem(TOKEN)
  }

}

