import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  list: any = [
    {
      "id": 1,
      "title": "Making a design system from scratch",
      "year": "12 Feb 2020",
      "express": "Design, Pattern",
      "text": "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
    {
      "id": 2,
      "title": "Creating pixel perfect icons in Figma",
      "year": "12 Feb 2020",
      "express": "Figma, Icon Design",
      "text": "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
  ]
  lists: any = [
    {
      "id": 1,
      "img": "../../../assets/Rectangle 30.png",
      "title": "Designing Dashboards",
      "year": "2020",
      "description": "Dashboard",
      "text": "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
    {
      "id": 2,
      "img": "../../../assets/Rectangle 32.png",
      "title": "Vibrant Portraits of 2020",
      "year": "2018",
      "description": "Illustration",
      "text": "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
    {
      "id": 3,
      "img": "../../../assets/Rectangle 34.png",
      "title": "36 Days of Malayalam type",
      "year": "2018",
      "description": "Typography",
      "text": "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
