import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Location} from '@angular/common'
import {HttpService} from "../http.service";
import {environment} from "../../environments/environment.prod";
@Component({
  selector: 'app-work-detail',
  templateUrl: './work-detail.component.html',
  styleUrls: ['./work-detail.component.scss']
})
export class WorkDetailComponent implements OnInit {
    info!:any
  constructor( private activatedRoute: ActivatedRoute, private location: Location, private http:HttpService) { }

  ngOnInit(): void {
      this.getInfo()
  }
  getInfo(){
      let id = this.activatedRoute.snapshot.params['id']
     // console.log(this.activatedRoute.snapshot.url[0].path)
      this.http.getDataByID(`${environment.url}${environment.featureWork.get}`, id).subscribe(data => {
       this.info= data.workDetails;
      //  this.user = info.workDetails;
        console.log(this.info)
  })
}
}
