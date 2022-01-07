import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uyari',
  templateUrl: './uyari.component.html',
  styleUrls: ['./uyari.component.css']
})
export class UyariComponent implements OnInit {
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
