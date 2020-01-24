import { Component } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {

  user: User;
  loading: boolean = true;

  constructor(public afAuth: AngularFireAuth) {
    this.afAuth.user.subscribe(userDB => {
      setTimeout(() => {
        this.user = userDB;
        this.loading = false;
      }, 1500);
    });
  }

}
