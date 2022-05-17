import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component, Input, OnInit } from '@angular/core';
import { NgModel,FormsModule } from '@angular/forms';

@Component({
  selector: 'courseform',
  templateUrl: './courseform.component.html',
  styleUrls: ['./courseform.component.css']
})
export class CourseformComponent {



 // onChange(x:NgModel){
  //return console.log(x.errors);

  //}
  logx(x:NgModel){
return console.log(x);

  }
}
