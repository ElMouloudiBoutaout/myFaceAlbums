import { Headers, Http, Response } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // tslint:disable-next-line:member-ordering
  title = 'app';

  /* tslint:disable-next-line:one-line
    constructor(private http: Http){
    /*  http.get('http://localhost:8082/etudiants')
          .map((response: Response) => response = response.json())
          .subscribe(response=>console.log(response));
  */
}

