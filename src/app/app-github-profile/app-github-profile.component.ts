import { MoshgitService } from './../services/moshgit.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoshgitComponent } from '../moshgit/moshgit.component';


@Component({
  selector: 'app-github-profile',
  templateUrl: './app-github-profile.component.html',
  styleUrls: ['./app-github-profile.component.css']
})
export class AppGithubProfileComponent implements OnInit {

  constructor(private route:ActivatedRoute, private router:Router ,private  mosh:MoshgitService) { }

  id!:any;
  username!:any;
  followers:any;

  ngOnInit(): void {

    this.mosh.getFollowers()
    .subscribe(response=>this.followers=response);
    
    
  }

onSubmit(){
  this.router.navigate(['followers']
  ,
  {queryParams:{page:'1',order:'newest'} });
}
}
