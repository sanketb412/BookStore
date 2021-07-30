import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private httpClient: HttpClient) {
   }

  post(url: string, data: any, isHeaderRequired: any = false, token: any = null) {
    console.log(url, data);
    let tokenOption = {headers: new HttpHeaders({"x-access-token": token})};
    console.log(tokenOption)
    return this.httpClient.post(url, data, isHeaderRequired && tokenOption)
  }
  
  get(url: string, isHeaderRequired: any = false, token: any = null) {  
    console.log("data Got");
    let tokenOption = {headers: new HttpHeaders({"x-access-token": token})};
    return this.httpClient.get(url, isHeaderRequired && tokenOption)
  }

  delete(url: string, isHeaderRequired: any = false, token: any = null) {  
    console.log("data delete");
    let tokenOption = {headers: new HttpHeaders({"x-access-token": token})};
    return this.httpClient.delete(url, isHeaderRequired && tokenOption)
  }

  put(url: string, data: any, isHeaderRequired: any = false, token: any = null) {  
    console.log("putting add"+ url, token);
    let tokenOption = {headers: new HttpHeaders({"x-access-token": token})};
    return this.httpClient.put(url, data, isHeaderRequired && tokenOption)
  }
}
