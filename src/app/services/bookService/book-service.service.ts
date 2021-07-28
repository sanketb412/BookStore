import { Injectable } from '@angular/core';
import { HttpServiceService } from '../httpService/http-service.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor(private httpService: HttpServiceService) { }

  url = environment.baseUrl

  getBook = () => {
    return this.httpService.get(`${this.url}/bookstore_user/get/book`)
  }

  addCart = (data: any, token: any) => {
    console.log(data, token)
    return this.httpService.post(`${this.url}/bookstore_user/add_cart_item/${data.id}`, {}, true)
  } 
}
