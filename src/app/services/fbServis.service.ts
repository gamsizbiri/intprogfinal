import { Uye } from './../models/uye';
import { Kayit } from './../models/kayit';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database'
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class FbServisService {

  private dbKayit = '/Kayitlar';
  private dbUye = '/Uyeler';
  kayitRef: AngularFireList<Kayit> = null;
  uyeRef: AngularFireList<Uye> = null;
  constructor(
    public db: AngularFireDatabase,
    public afAuth: AngularFireAuth
  ) {
    this.kayitRef = db.list(this.dbKayit);
    this.uyeRef = db.list(this.dbUye);
  }

  OturumAc(mail: string, parola: string) {
    return this.afAuth.signInWithEmailAndPassword(mail, parola);
  }
  OturumKapat() {
    return this.afAuth.signOut();
  }

  OturumKontrol(){
    if (localStorage.getItem("user")){
      return true;
    }
    else{
      return false;
    }
  }

  KayitListele() {
    return this.kayitRef;
  }
  KayitEkle(k: Kayit) {
    return this.kayitRef.push(k);
  }
  KayitDuzenle(k: Kayit) {
    return this.kayitRef.update(k.key, k);
  }
  KayitSil(key: string) {
    return this.kayitRef.remove(key);
  }

}
