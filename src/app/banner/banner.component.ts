import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  title = "banner title!";
  uppercase = false;

  constructor() { }

  ngOnInit(): void {
  }

  clickTitle() {
    this.uppercase = !this.uppercase;
    if(this.uppercase) {
      this.title = this.title.toUpperCase();
    } else {
      this.title = this.title.toLowerCase();
    }
  }

}
