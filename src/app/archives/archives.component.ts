
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-archives',
  templateUrl: './archives.component.html',
  styleUrls: ['./archives.component.css']
})
export class ArchivesComponent implements OnInit {

  constructor(private route:ActivatedRoute ,private router:Router) { }

  year! :any;
  month! :any;

  ngOnInit(): void {
    this.route.paramMap
    .subscribe(params=>{
      this.year=params.get('year')
     this.month= params.get('month')
    });      
    }
    
  

  ViewAll(){
   this.router.navigate(['home']);
  }
}
