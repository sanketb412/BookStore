import { Injectable } from '@angular/core';
import { HttpServiceService } from '../httpService/http-service.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpService: HttpServiceService) { }

  url = environment.baseUrl

  signup = (data: any) => {
    return this.httpService.post(`${this.url}/bookstore_user/registration`, data)
  }

  login = (data: any) => {
    return this.httpService.post(`${this.url}/bookstore_user/login`, data)
  }

}
