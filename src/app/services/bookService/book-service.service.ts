import { Injectable } from '@angular/core';
import { HttpServiceService } from '../httpService/http-service.service';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  private refresh = new Subject<void>();

  getRefreshedData() {
    return this.refresh;
  }

  constructor(private httpService: HttpServiceService) { }

  url = environment.baseUrl

  getBook = () => {
    return this.httpService.get(`${this.url}/bookstore_user/get/book`)
  }

  addCart = (data: any, token: any) => {
    console.log(data, token)
    return this.httpService.post(`${this.url}/bookstore_user/add_cart_item/${data.id}`, {}, true, token)
  } 

  getCart = (token: any) => {
    console.log(token)
    return this.httpService.get(`${this.url}/bookstore_user/get_cart_items`, true, token)
  }
  
  deleteItem = (data: any, token: any) => {
    console.log(data, token)
    return this.httpService.delete(`${this.url}/bookstore_user/remove_cart_item/${data}`, true, token)
  }

  putAddress = (data: any, token: any) => {
    return this.httpService.put(`${this.url}/bookstore_user/edit_user`, data, true, token)
  }

  order = (data: any, token: any) => {
    // console.log(data, token)
    return this.httpService.post(`${this.url}/bookstore_user/add/order`, data, true, token)
  } 
}
