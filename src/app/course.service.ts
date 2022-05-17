import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
getCourses(){
return ['c1','c2','c3']
}

  constructor() { }
}
