import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  loading: boolean = true;

  constructor() {
    setTimeout(() => {
      this.loading = false;
    }, 1500);
  }

}
