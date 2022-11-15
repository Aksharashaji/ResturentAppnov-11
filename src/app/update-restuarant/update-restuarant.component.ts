import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-update-restuarant',
  templateUrl: './update-restuarant.component.html',
  styleUrls: ['./update-restuarant.component.css']
})
export class UpdateRestuarantComponent implements OnInit {

  restId:any;
  restDetials:any;

  constructor(private activateRoute:ActivatedRoute,private apiService:ApiService,private router:Router) { }

  ngOnInit(): void {
  // 1. get resturant id to be updated
  this.activateRoute.params.subscribe((result)=>{
this.restId=result['id']

  })

  // fetch details of resturant id
  this.apiService.viewRestuarant(this.restId)
  .subscribe((result)=>{
  this.restDetials=result
  console.log(this.restDetials);

  })
  }

  // updateResturant
  updateRestuarant(form:any){
    console.log(form.value);
    let updateRestDetails={
      id:form.value.id,
      name:form.value.rname,
      neighborhood:form.value.neighborhood,
      photograph:form.value.photograph,
      address:form.value.address,
      latlng:{
        lat:form.value.lat,
        lng:form.value.lng
      },
      cuisine_type:form.value.cuisine_type,
      operating_hours:{
        Monday:form.value.Monday,
        Tuesday:form.value.Tuesday,
        Wednesday:form.value.Wednesday,
        Thursday:form.value.Thursday,
        Friday:form.value.Friday,
        Saturday:form.value.Saturday,
        Sunday:form.value.Sunday

      },
      reviews:[
        {
          name:form.value.rvname,
          date:form.value.date,
          rating:form.value.rating,
          comments:form.value.comments
        }
      ]
    }
    this.apiService.updateRestuarant(this.restId,updateRestDetails)
    .subscribe((data)=>{
      alert('Resturant details are updated succesfully')
    this.router.navigateByUrl('')
    })
    
  }

}
