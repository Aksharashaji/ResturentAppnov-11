import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-restuarants-list',
  templateUrl: './restuarants-list.component.html',
  styleUrls: ['./restuarants-list.component.css']
})
export class RestuarantsListComponent implements OnInit {

//properties
rest="All Resturant list"

  //to hold ewsturant list
restuarantsList:any=[]

// to hold search term
searchTerm=""

  //dependency injection
  constructor(private apiService:ApiService) { }

  ngOnInit(): void {

    //api call-asynchronous call -resolve state-subcribe()
    this.apiService.getAllRestuarantsList()
    .subscribe((result)=>{
      this.restuarantsList=result
      console.log(result);
      
    })
//to get serch term from api service
this.apiService.search.subscribe((data)=>{
  console.log(data);
  this.searchTerm=data

})

  }

}
