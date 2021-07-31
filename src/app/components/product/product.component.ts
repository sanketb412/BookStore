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

  displayAddress = true;

  p: number = 1 ;
  @Input() books: any ;
  
  id:any
  cartBooks: Array<any> =[];
  cart1:any

  token: any
  constructor( private router: Router, private service: BookServiceService,  private route: ActivatedRoute, private sibService: SiblingService) { 
  }

  ngOnInit(): void {
    this.token = localStorage.getItem('token')
    console.log(this.token);
    this.getItems();

  }

  toProductPage(id: any){
    this.id = id
    this.router.navigate(['productpage/'], {state: {value: id }})
  }

  address(cart: any){
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
    this.getItems();
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

  getItems = () => {
    console.log("get cart API")
    this.service.getCart(this.token).subscribe((data:any)=>{
      this.cartBooks=data['result']

      this.sibService.communicateMessage(this.cartBooks.length)
    })

  } 

}


