
import { Pipe } from "@angular/core";
import { PipeTransform } from "@angular/core";

@Pipe({
name: "summary"

})

export class SummaryPipe implements PipeTransform{

    transform(value: string,args?: number){
     if(!value)
     return null;
    
     
     return value.substring(0,(args)? args:10);
    
    }
}