import { Component, OnInit } from '@angular/core';
import { BookServiceService } from 'src/app/services/bookService/book-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  displayAddress = true;

  labelPosition: 'before' | 'after' = 'after';
  
  cartBooks: Array<any> =[];

  token: any

  constructor( private bookService: BookServiceService ) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token')
    this.getItems()
  }

  address(){
    this.displayAddress = false
  }

  getItems = () => {
    console.log("get cart API")
    this.bookService.getCart(this.token).subscribe((data:any)=>{
      this.cartBooks=data['result']
      console.log(this.cartBooks);
    })
  } 
}
