import { Sonuc } from './../../models/sonuc';
import { Kayit } from './../../models/kayit';
import { FbServisService } from './../../services/fbServis.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sinav',
  templateUrl: './sinav.component.html',
  styleUrls: ['./sinav.component.css']
})
export class SinavComponent implements OnInit {

  kayitlar;
  secKayit: Kayit = new Kayit();
  sonuc: Sonuc = new Sonuc();
  detay: boolean = false;
  constructor(
    public fbServis: FbServisService,
    public router: Router
  ) { }

  ngOnInit() {
    this.KayitLislele();
  }

  KayitLislele() {
    this.fbServis.KayitListele().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.kayitlar = data;
    });
  }


  KayitSec(k: Kayit) {
    Object.assign(this.secKayit, k);

  }


  
  OturumuKapat() {
    this.fbServis.OturumKapat().then(() => {
      localStorage.removeItem("user");
      this.router.navigate(['/login']);
    });
  }
}
