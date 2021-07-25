import { Component, OnInit,Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() books: any ;

  id:any

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  toProductPage(id: any){
    this.id = id
    this.router.navigate(['productpage/'], {state: {value: id }})
  }
}


