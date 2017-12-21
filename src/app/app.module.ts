import {HttpModule} from '@angular/http';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AuthService } from './services/auth.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AppRoutes } from './app.routes';


export const firebaseConfig = {
  apiKey: 'AIzaSyCUrGirgPNAJJmNHC5fIPvz291VgKSK9rM',
    authDomain: 'myfacebookalbums-2d813.firebaseapp.com',
    databaseURL: 'https://myfacebookalbums-2d813.firebaseio.com',
    projectId: 'myfacebookalbums-2d813',
    storageBucket: 'myfacebookalbums-2d813.appspot.com',
    messagingSenderId: '498291658722'

};



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,

  ],
  imports: [
    HttpModule,
    AppRoutes,
    BrowserModule,
    AngularFireDatabaseModule,
     AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
