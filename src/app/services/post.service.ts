import { AppError } from './../common/app-error';

import { Injectable } from '@angular/core';

import { catchError, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class PostService {

  
  private url='https://jsonplaceholder.typicode.com/posts';
  constructor( private http:HttpClient) {

  }

       getPosts(){
      return this.http.get(this.url);
       }

      createPosts(post:any){
        
        return Observable.prototype;
        
        //return this.http.post(this.url,JSON.stringify(post));
      }

      updatePosts(post:HTMLInputElement){

       return  this.http.patch(this.url+"/"+post.id,JSON.stringify({title:'updated'}));
      }

      deletePosts(id:any){

        return this.http.delete(this.url+'/'+id);
      
       
        
        };

        handleError(error:any) {
          let errorMessage = '';
          if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = `Error: ${error.error.message}`;
          } else {
            // server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
          }
      }

    }
