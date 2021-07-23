import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() books: any ;
  
  book:any
  
  constructor( private router: Router) { }

  ngOnInit(): void {
    
  }

  toProductPage(book: any){
    this.book = book
    this.router.navigate(['/productpage'])
  }
}
