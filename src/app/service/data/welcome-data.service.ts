import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class helloworldBean {
  constructor(public message: string) {
  }
}


@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient
  ) { }
  executeHelloWorldBeanService() {
    // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();

    // let headers = new HttpHeaders({
    //   Authorization: basicAuthHeaderString
    // })
    return this.http.get<helloworldBean>('http://localhost:8080/hello-world-bean'
    // ,{ headers }
     );
    //console.log("Execute Hello World Bean Service")
  }
  // http://localhost:8080/hello-world/path-variable/amor

  executeHelloWorldServiceWithPathVariable(name: string) {
    // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();

    // let headers = new HttpHeaders({
    //   Authorization: basicAuthHeaderString
    // })
    return this.http.get<helloworldBean>(`http://localhost:8080/hello-world/path-variable/${name}`
    // , { headers }
    );

  }

  // createBasicAuthenticationHttpHeader() {
  //   let username = 'amor';
  //   let password = 'maycem';
  //   let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
  //   return basicAuthHeaderString;
  // }
  // Access to XMLHttpRequest at 'http://localhost:8080/hello-world/path-variable/amor' 
  //from origin 'http://localhost:4200' has been blocked by CORS policy: No 'Access-Control-Allow-Origin'
  // header is present on the requested resource.

  // Access to XMLHttpRequest at 'http://localhost:8080/hello-world/path-variable/amor' 
  //from origin 'http://localhost:4200' has been blocked by CORS policy: Response to preflight
  // request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present 
  // on the requested resource.
}
