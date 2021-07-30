import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookServiceService } from 'src/app/services/bookService/book-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  displayAddress = true;

  @Input() books: any ;


  id:any

  cart1:any

  token: any
  constructor( private router: Router, private service: BookServiceService,  private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token')
    console.log(this.token);

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
    })
    this.displayAddress = false
  }

}


