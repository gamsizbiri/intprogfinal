import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bitti',
  templateUrl: './bitti.component.html',
  styleUrls: ['./bitti.component.scss']
})
export class BittiComponent implements OnInit {
  fbServis: any;
  router: any;
  

  constructor() { }

  ngOnInit() {
  }
  OturumuKapat() {
    this.fbServis.OturumKapat().then(() => {
      localStorage.removeItem("user");
      this.router.navigate(['/login']);
    });
  }
}
