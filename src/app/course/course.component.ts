import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { SummaryPipe } from './../summary.pipe';
import { CourseService } from './../course.service';
import { Component, NgModule } from '@angular/core';
import { HtmlParser } from '@angular/compiler';

@Component({
  selector: 'courses',
  template: `


    <div [style.display] ="(isActive)? 'block':'none'" >{{data|summary:lim|uppercase}}</div>  
<div>
  

  <input #enter (keyup)="onEnter(enter.value)"/>
  <input  #limit (keyup)="onLimitEnter(limit.value)"/>
     

  <button class="btn btn-primary" [style.background-color]="isActive ? 'black' : 'red'" (click)="OnClick()">Hello</button>
      
            
      
        <svg  width="50" height="50" [style.fill]="isstaractive ? 'blue' : 'red'" class="bi bi-star-fill" viewBox="0 0 16 16" (click)="OnClickStar($event)">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
</svg>

</div>

      
     `
})
export class CourseComponent  {

  
title="List of courses";
isActive=true;
isstaractive=true;

data='Enter the data';
lim=5;

OnClick(){

  if(this.isActive===true)
  this.isActive=false;
  else
  this.isActive=true;
  

 
  }

  OnClickStar($event :Event){

    if(this.isstaractive===true)
    this.isstaractive=false;
    else
    this.isstaractive=true;
    $event.stopPropagation();
    
 
    
 
}

      

     onEnter(enter: string){
      this.data=enter;

     }
     onLimitEnter(limit: string){
      this.lim=parseFloat(limit);

     }

}
