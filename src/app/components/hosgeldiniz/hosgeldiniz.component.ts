import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hosgeldiniz',
  templateUrl: './hosgeldiniz.component.html',
  styleUrls: ['./hosgeldiniz.component.css']
})
export class HosgeldinizComponent implements OnInit {
  fbServis: any;
  router: any;

  OturumuKapat() {
    this.fbServis.OturumKapat().then(() => {
      localStorage.removeItem("user");
      this.router.navigate(['/login']);
    });
  }
  constructor() { }

  ngOnInit() {
  }

}
