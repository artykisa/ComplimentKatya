import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-i-want-you',
  templateUrl: './i-want-you.component.html',
  styleUrls: ['./i-want-you.component.css']
})
export class IWantYouComponent implements OnInit {

  IWantYou: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  onIWantYouClick() {
    this.IWantYou = !this.IWantYou;
  }
}
