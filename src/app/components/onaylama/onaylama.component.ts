import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onaylama',
  templateUrl: './onaylama.component.html',
  styleUrls: ['./onaylama.component.scss']
})
export class OnaylamaComponent implements OnInit {


  ackapa:boolean=false;
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
