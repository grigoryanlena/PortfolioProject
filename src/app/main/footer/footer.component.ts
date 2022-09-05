import { Component, OnInit } from '@angular/core';
import {faFacebookSquare} from "@fortawesome/free-brands-svg-icons";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import {faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
   faFacebook=faFacebookSquare
   faInstagram=faInstagram
   faTwitter=faTwitter
  faLinkedin=faLinkedin
  constructor() { }

  ngOnInit(): void {
  }

}
