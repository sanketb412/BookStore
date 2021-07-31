import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orderplaced',
  templateUrl: './orderplaced.component.html',
  styleUrls: ['./orderplaced.component.scss']
})
export class OrderplacedComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  continueshopping(){
    this.router.navigate(['/dashboard']);
  }

}
