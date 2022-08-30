import { Component, OnInit } from '@angular/core';
import {HttpService} from "../http.service";
import {environment} from "../../environments/environment.prod";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  resentPosts:any[]=[]

  constructor(private httpService:HttpService) { }

  ngOnInit(): void {
    this.getResentPosts()
  }

  getResentPosts(){
    return this.httpService.getData(`${environment.url}${environment.resentPosts.get}`).subscribe((data)=>{
      this.resentPosts=data
    })
  }
}
