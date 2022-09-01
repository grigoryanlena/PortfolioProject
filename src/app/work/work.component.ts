import { Component, OnInit } from '@angular/core';
import {HttpService} from "../http.service";
import {environment} from "../../environments/environment.prod";

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  featuredWork: any[]=[];

  constructor(private http: HttpService) {

  }

  ngOnInit(): void {
    this.getFeaturedWork()
  }

  getFeaturedWork(){
   return  this.http.getData(`${environment.url}${environment.featureWork.get}`).subscribe((data)=>{
      this.featuredWork = data
    })
  }

}
