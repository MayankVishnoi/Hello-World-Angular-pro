
import { Component, Input } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'liked',
  templateUrl: './isliked.component.html',
  styleUrls: ['./isliked.component.css']

})
export class IslikedComponent {


  @Input()
  isLiked!: boolean;
  @Input() 
  likesCount!: number;
  n=0;

constructor(){}

onClick()


{
this.likesCount+= (this.isLiked) ?  -1:+1;
this.isLiked=!this.isLiked;
    this.n=this.n+1;

}
 

}
