import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/services/userService/user-service.service';

@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.scss']
})
export class LoginuserComponent implements OnInit {

  hide = true;
  
  constructor(private service: UserServiceService) { }

  form = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.email, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)])
  })

  ngOnInit(): void {
  }

  submit() {
    // console.log(this.form); 
    if (this.form.valid) {
      let data = {
        "email": this.form.controls.userName.value,
        "password": this.form.controls.password.value
      }
      
      this.service.login(data).subscribe((data: any) => {
        console.log(data);

        localStorage.setItem("fullName", data["fullName"]);
        localStorage.setItem("email", data["email"]);
        localStorage.setItem("token", data["id"]);
      });
    }
  }
}
