import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/services/userService/user-service.service';

@Component({
  selector: 'app-signupuser',
  templateUrl: './signupuser.component.html',
  styleUrls: ['./signupuser.component.scss']
})
export class SignupuserComponent implements OnInit {

  hide = true;
  
  constructor(private service: UserServiceService) { }

  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    userName: new FormControl('', [Validators.required, Validators.email, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)]),
    number: new FormControl('', [Validators.required, Validators.minLength(8)])
  })

  submit() {
    console.log(this.form.valid); 
      if (this.form.valid) {
        let data = {
          "fullName": this.form.controls.name.value,
          "email": this.form.controls.userName.value,
          "password": this.form.controls.password.value,
          "phone": this.form.controls.number.value
        }
        this.service.signup(data).subscribe((data) => {
          console.log(data)
        },
        error => {
          console.log(error);
        });
      }
  }
  
  ngOnInit(): void {
  }
}
