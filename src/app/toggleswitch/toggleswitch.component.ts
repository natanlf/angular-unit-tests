import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggleswitch',
  templateUrl: './toggleswitch.component.html',
  styleUrls: ['./toggleswitch.component.css']
})
export class ToggleswitchComponent implements OnInit {

  public isOn = false;

  constructor() { }

  ngOnInit(): void {
  }

  clicked() {
    this.isOn = !this.isOn;
  }

  get status() {
    return `Toggleswitch is ${this.isOn ? 'on' : 'off'}`;
  }

  get buttonLabel() {
    return `TURN ${this.isOn ? 'OFF': 'ON'}`
  }

}
