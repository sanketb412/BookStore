import { Component, OnInit } from '@angular/core';
import { BookServiceService } from 'src/app/services/bookService/book-service.service';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  books:any=[];
  
  constructor(private bookService: BookServiceService) { }

  ngOnInit(): void {
    this.getData()
  }

  getData = () => {
    this.bookService.getBook().subscribe((data:any)=>{
      this.books=data['data']
      console.log(this.books)  
    })
  }

}
