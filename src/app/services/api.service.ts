import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DeleteRestuarantComponent } from '../delete-restuarant/delete-restuarant.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //variables

search = new BehaviorSubject("")

  //dependency injection
  constructor(private api:HttpClient) { }

  //userdefinesd functios

  //1.get all resturent list function

  getAllRestuarantsList(){
    //call api:http://localhost:3000/restaurants
    //Http request-get method -HttpClient class -HttpClientModule
   return this.api.get('http://localhost:3000/restaurants')
  }

  //2.to get a single resturant detail

  viewRestuarant(restId:Number){
    //using rest id api call:api:http://localhost:3000/restaurants/id
    //httprequst-get method
   return this.api.get('http://localhost:3000/restaurants/'+restId)
  }

  //3 to add new resturent detail
  addResturant(newResturant:any){
    return this.api.post('http://localhost:3000/restaurants/',newResturant)

  }

  // 4.to update perticular resturant
  updateRestuarant(restId:any,updatedRestBody:any){
    return this.api.put('http://localhost:3000/restaurants/'+restId,updatedRestBody)
  }


  // 5.to delete particular resturant
  deleteRestuarant(restId:any){
   return this.api.delete('http://localhost:3000/restaurants/'+restId)
  }

}
