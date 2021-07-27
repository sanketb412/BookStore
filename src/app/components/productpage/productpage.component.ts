import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.scss']
})
export class ProductpageComponent implements OnInit {

  data: any

  constructor(private router: Router) { 
    this.data = this.router.getCurrentNavigation()?.extras.state;
    console.log(this.data)
  }

  ngOnInit(): void {
    this.getData()
  }

  getData = () => {
    this.data=this.data['value']
  }
}


