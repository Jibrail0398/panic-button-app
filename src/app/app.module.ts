import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, provideFirebaseApp(() => initializeApp(
    {
      "projectId":environment.firebaseConfig.projectId,
      "appId":environment.firebaseConfig.appId,
      "databaseURL":environment.firebaseConfig.databaseURL,
      "storageBucket":environment.firebaseConfig.storageBucket,
      "apiKey":environment.firebaseConfig.apiKey,
      "authDomain":environment.firebaseConfig.authDomain,
      "messagingSenderId":environment.firebaseConfig.authDomain,
      "measurementId":environment.firebaseConfig.measurementId
    }
  )), 
  provideDatabase(() => getDatabase())
],
  bootstrap: [AppComponent],
})
export class AppModule {}
