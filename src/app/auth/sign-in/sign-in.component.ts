import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styles: []
})
export class SignInComponent implements OnInit {

  form: FormGroup;

  constructor(public afAuth: AngularFireAuth) {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, Validators.required)
    });
  }

  ngOnInit(): void {
  }

  login(f: FormGroup): void {
    if (f.invalid) return;
    this.afAuth.auth.signInWithEmailAndPassword(f.value.email, f.value.password);
  }

}
