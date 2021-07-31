import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/services/userService/user-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.scss']
})
export class LoginuserComponent implements OnInit {

  hide = true;
  
  constructor(private service: UserServiceService, private router: Router) { }

  form = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.email, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)])
  })

  ngOnInit(): void {
  }

  submit() {
    // console.log(this.form); 
    if (this.form.valid) {
      let dataLogin = {
        "email": this.form.controls.userName.value,
        "password": this.form.controls.password.value,
      }
      
      this.service.login(dataLogin).subscribe((dataLogin: any) => {
        console.log(dataLogin)
        localStorage.setItem("email", dataLogin["email"]);
        localStorage.setItem("token", dataLogin.result.accessToken);
        this.router.navigate(['/home'])
        
      },
      error => {
        console.log(error);
      });
    }
  }
}
