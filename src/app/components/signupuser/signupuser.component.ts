import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-signupuser',
  templateUrl: './signupuser.component.html',
  styleUrls: ['./signupuser.component.scss']
})
export class SignupuserComponent implements OnInit {

  hide = true;
  
  constructor() { }

  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    userName: new FormControl('', [Validators.required, Validators.email, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)]),
    number: new FormControl('', [Validators.required, Validators.minLength(8)])
  })

  get f() {
    return this.form.controls;
  }

  ngOnInit(): void {
  }

}
