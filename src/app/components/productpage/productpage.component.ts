import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.scss']
})
export class ProductpageComponent implements OnInit {

  constructor(private route: Router) { 
    // console.log(this.route.getCurrentNavigation()?.extras.state);
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
   
  }

}
