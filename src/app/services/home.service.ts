import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  Archives=[{year:2017, month:1},
            {year:2017, month:2},
             {year:2017, month:3}]

}
