import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  archives!: any[];

  constructor(private home:HomeService) { }

  ngOnInit() {
    this.archives=this.home.Archives
    console.log(this.archives);
  }

  
}
