import { Login2Component } from './components/login2/login2.component';
import { OgrenciasComponent } from './components/ogrencias/ogrencias.component';
import { HosgeldinizComponent } from './components/hosgeldiniz/hosgeldiniz.component';
import { SorularComponent } from './components/sorular/sorular.component';
import { SinavComponent } from './components/sinav/sinav.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { IlksayfaComponent } from './components/ilksayfa/ilksayfa.component';
import { OnaylamaComponent } from './components/onaylama/onaylama.component';
import { BittiComponent } from './components/bitti/bitti.component';
import { UyariComponent } from './components/uyari/uyari.component';

const redirectLogin = () => redirectUnauthorizedTo(['/login']);
const routes: Routes = [

  
  { path: 'anasayfa1', component: OgrenciasComponent,
    canActivate:[AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectLogin
    }
  },
  
  { path: "sinavlar", component: HomeComponent,
  canActivate:[AngularFireAuthGuard],
  data: {
    authGuardPipe: redirectLogin
  } 
  },
  
  { path: "dersler", component: SinavComponent,
  canActivate:[AngularFireAuthGuard],
  data: {
    authGuardPipe: redirectLogin
  } },
  { path: "onaylama", component: OnaylamaComponent,
  canActivate:[AngularFireAuthGuard],
  data: {
    authGuardPipe: redirectLogin
  } },
  { path: "sorular", component: SorularComponent,
  canActivate:[AngularFireAuthGuard],
  data: {
    authGuardPipe: redirectLogin
  } },
  { path: "tamamlandi", component: BittiComponent,
  canActivate:[AngularFireAuthGuard],
  data: {
    authGuardPipe: redirectLogin
  } },
  { path: 'uyari', component: UyariComponent,
  canActivate:[AngularFireAuthGuard],
  data: {
    authGuardPipe: redirectLogin
  } },
  { path: 'anasayfa', component: HosgeldinizComponent,
  canActivate:[AngularFireAuthGuard],
  data: {
    authGuardPipe: redirectLogin
  } },


  { path: "", component: IlksayfaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login2', component: Login2Component },

  
  
 
  
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
