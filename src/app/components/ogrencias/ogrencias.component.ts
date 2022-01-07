import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ogrencias',
  templateUrl: './ogrencias.component.html',
  styleUrls: ['./ogrencias.component.css']
})
export class OgrenciasComponent implements OnInit {
  fbServis: any;
  router: any;

  constructor() { }
  OturumuKapat() {
    this.fbServis.OturumKapat().then(() => {
      localStorage.removeItem("user");
      this.router.navigate(['/login']);
    });
  }
  ngOnInit() {
  }

}
