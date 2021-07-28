import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SiblingService } from 'src/app/services/sibling/sibling.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // @Input() cartBooks: any ;

  countItem:any
  badgeContent: any;

  constructor(private router: Router, private sibService: SiblingService) { }

  ngOnInit(): void {
    this.sibService.sendMessage.subscribe((message: any) =>{
      this.countItem = message
      console.log("Header count "+ this.countItem)
      this.badgeContent = this.countItem;
      console.log(this.badgeContent)
    })
  }

  homepage(){
    this.router.navigate(['/home'])
  }

  getCart(){
    this.router.navigate(['/cart'])
  }
}
