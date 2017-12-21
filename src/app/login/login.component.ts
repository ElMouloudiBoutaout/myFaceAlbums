import { Http, Response } from '@angular/http';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
  }

  // tslint:disable-next-line:member-ordering
  user = null;


  constructor(private authService: AuthService,
    private router: Router,
    public afAuth: AngularFireAuth,
    private http: Http) {

  }


  signInWithFacebook() {
    /* this.authService.signInWithFacebook()
       .then((res) => {
         this.router.navigate(['dashboard']);
       })
       .catch((err) => { console.log(err);
       // tslint:disable-next-line:quotemark
       console.log("pfffffffff"); });*/
    /* const provider = new firebase.auth.FacebookAuthProvider();
       provider.addScope('user_birthday');
       firebase.auth().signInWithPopup(provider).then(function(result) {
         // This gives you a Facebook Access Token.
         const token = result.credential.accessToken;
         console.log(token);
         // The signed-in user info.
         const user = result.user;
       });*/


    // tslint:disable-next-line:max-line-length
    this.http.get('https://graph.facebook.com//oauth/access_token?client_id=168255613908114&client_secret=e7cb8d5a7b8d415c8c6dc40a923d2a8e&grant_type=client_credentials')
      .map((response: Response) => response = response.json()).
      subscribe(response => console.log(response));

    // &client_secret=e7cb8d5a7b8d415c8c6dc40a923d2a8e&grant_type=client_credentials
  }





}
