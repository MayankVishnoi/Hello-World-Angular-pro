
import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service'
import { catchError, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';



@Component({
  selector: 'apiex',
  templateUrl: './apiex.component.html',
  styleUrls: ['./apiex.component.css']
})
export class ApiexComponent implements OnInit{


  posts!: any;

  

  constructor(private service: PostService) { 

    
 }

 ngOnInit(): void {
     
  this.service.getPosts()
    .subscribe
    ((response)=>{
     this.posts=response;
       
    },(error:Response)=>{
      alert('An unexpected error occured')
      
      console.log(error);
    });
 }

 createPost(input:HTMLInputElement){
  let post={title: input.value};
  this.posts.splice(0,0,post);
    this.service.createPosts(post)
    .subscribe(response=>{      

      }
        
    ,(error:Response)=>{
     
      if(error.status===400){
      //this.form.setErrors(error.json());
      this.posts.splice(0,1);
      }
      else
      {
       
      alert('An unexpected error occured');
      console.log(error);
      }
    });
  } 
  updatePost(post:HTMLInputElement){
  this.service.updatePosts(post)
  .subscribe(response=>{console.log(response)},error=>{
    alert('An unexpected error occured');
    console.log(error);
  });

  }
  deletePost(post:HTMLInputElement){
    
this.service.deletePosts(5000)
.subscribe(response=>{
let index =this.posts.indexOf(post);
this.posts.splice(index,1);


},(error:Response)=>{
  if(error.status===404)
      alert('This post has already been deleted.')      
      
      else{
  alert('An unexpected error occured.');
  console.log(error);
}
});

  }
    
  }



