import { MoshgitService } from './../services/moshgit.service';
import { Component, OnInit } from '@angular/core';
import { getLocaleDateFormat } from '@angular/common';

@Component({
  selector: 'moshgit',
  templateUrl: './moshgit.component.html',
  styleUrls: ['./moshgit.component.css']
})
export class MoshgitComponent implements OnInit {

  followers:any;
  constructor(private service:MoshgitService) {

   }


  ngOnInit(): void {
    this.service.getFollowers()
    .subscribe(response=>{
     this.followers=response;
     console.log(this.followers);
       
    });

  
}



}
