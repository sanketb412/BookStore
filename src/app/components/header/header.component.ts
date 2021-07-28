import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() cartBooks: any ;

  badgeContent: number | undefined;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.badgeContent = this.cartBooks.length;
  }

  homepage(){
    this.router.navigate(['/home'])
  }

  getCart(){
    this.router.navigate(['/cart'])
  }
}
