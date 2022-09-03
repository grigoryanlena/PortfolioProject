import { Component, OnInit } from '@angular/core';
import {HttpService} from "../http.service";
import {environment} from "../../environments/environment.prod";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent  implements OnInit {
  getList: any[]=[]

  constructor(private httpService:HttpService) { }

  ngOnInit(): void {
    this.getgetList()
  }

  getgetList(){
    return this.httpService.getData(`${environment.url}${environment.getList.get}`).subscribe((data)=>{
      this.getList=data
    })
  }
};
