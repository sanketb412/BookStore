import { Component, OnInit } from '@angular/core';
import { BookServiceService } from 'src/app/services/bookService/book-service.service';
import { SiblingService } from 'src/app/services/sibling/sibling.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  displayAddress = true;
  displayButton = true;

  labelPosition: 'before' | 'after' = 'after';
  
  cartBooks: Array<any> =[];

  removeById: any
  token: any

  constructor( private bookService: BookServiceService, private sibService: SiblingService ) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token')
    this.getItems()
  }

  address(){
    this.displayAddress = false
    this.displayButton = false
  }

  getItems = () => {
    console.log("get cart API")
    this.bookService.getCart(this.token).subscribe((data:any)=>{
      this.cartBooks=data['result']
      console.log(this.cartBooks);
      this.sibService.communicateMessage(this.cartBooks.length)
    })
  } 

  removeItem=(data: any)=>{
    console.log(data._id)
    this.bookService.deleteItem(data._id, this.token).subscribe((data:any)=>{
      this.getItems()
    })
  }
}
