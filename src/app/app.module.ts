import { Login2Component } from './components/login2/login2.component';
import { OgrenciasComponent } from './components/ogrencias/ogrencias.component';
import { HosgeldinizComponent } from './components/hosgeldiniz/hosgeldiniz.component';
import { UyariComponent } from './components/uyari/uyari.component';
import { BittiComponent } from './components/bitti/bitti.component';
import { SorularComponent } from './components/sorular/sorular.component';
import { OnaylamaComponent } from './components/onaylama/onaylama.component';
import { SinavComponent } from './components/sinav/sinav.component';
import { IlksayfaComponent } from './components/ilksayfa/ilksayfa.component';

import { LoginComponent } from './components/login/login.component';
import { environment } from './../environments/environment';
import { HomeComponent } from './components/home/home.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    IlksayfaComponent,
    SinavComponent,
    OnaylamaComponent,
    SorularComponent,
    BittiComponent,
    UyariComponent,
    HosgeldinizComponent,
    OgrenciasComponent,
    Login2Component

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
