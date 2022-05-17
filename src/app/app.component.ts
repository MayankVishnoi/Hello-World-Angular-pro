import { CourseService } from './course.service';
import { PasswordChangeComponent } from './password-change/password-change.component';
import { IslikedComponent } from './isliked/isliked.component';
import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HelloWorld';
  courses;


  tweet={
    body:'Here is the tweet body',
Isliked:false,
likesCount:0


}
constructor(){

  let c=new CourseService();
  this.courses=c.getCourses();

}

}
