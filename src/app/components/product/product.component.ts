import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookServiceService } from 'src/app/services/bookService/book-service.service';
import { SiblingService } from 'src/app/services/sibling/sibling.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  p: number = 1 ;
  @Input() books: any ;
  
  id:any
  cartBooks: Array<any> =[];
  cart1:any
  cart: any
  token: any
  constructor( private router: Router, private service: BookServiceService,  private route: ActivatedRoute, private sibService: SiblingService) { 
  }

  ngOnInit(): void {
    this.token = localStorage.getItem('token')    
    // console.log(this.token);
    this.service.getCart(this.token).subscribe((data:any)=>{
      this.cartBooks=data['result']  
      
      this.sibService.communicateMessage(this.cartBooks.length) 
    })
  }
  
  address(cart: any){
    cart.displaybag = false;

    for (this.cart1 of this.books){
      let a = console.log("a", cart._id)
      let b = console.log("b", this.cart1._id)
      if (a==b){
        cart.displaybag = true;
      }
    }
    let reqData = {
      "id": cart._id,
      "token": this.token
    }
    this.service.addCart(reqData, this.token).subscribe((data) => {
      console.log(data)
    },
    error => {
      console.log(error);
    });    
  }
  
  whishlist(cart: any){
    let wishlistData = {
      "id": cart._id,
      "token": this.token
    }
    this.service.addwishlist(wishlistData, this.token).subscribe((response)=>{
      console.log(response)
    },
    error => {
      console.log(error);
    });
  }

  toProductPage(id: any){
    this.id = id
    this.router.navigate(['productpage/'], {state: {value: id }})
  }

}


