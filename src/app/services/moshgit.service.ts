import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoshgitService {

  constructor(private http:HttpClient) {

   }

private url='https://api.github.com/users/mosh-hamedani/followers'

getFollowers(){
return this.http.get(this.url);

}

getDataForSingle(id: number){
  return this.http.get(this.url + '/' + id);
  
  }

}
