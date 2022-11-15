import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(restuarantsList: any[], filterString:String,propName:any): any[] {
    const result:any=[]
    if(!restuarantsList || filterString=='' || propName==''){
      return restuarantsList
    }
    restuarantsList.forEach((resturant:any)=>{
      if(resturant[propName].trim().toLowerCase().includes(filterString.toLowerCase())){
        result.push(resturant)
        console.log(result);
        
      }
    })
    return result
  }

}
