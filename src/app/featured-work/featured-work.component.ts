import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-featured-work',
  templateUrl: './featured-work.component.html',
  styleUrls: ['./featured-work.component.scss']
})
export class FeaturedWorkComponent implements OnInit {
  @Input("title") title!:string
  @Input("description") description!:string
  @Input("img") img!:string
  @Input("year") year!:string
  @Input("text") text!:string
  constructor() { }

  ngOnInit(): void {
  }

}
