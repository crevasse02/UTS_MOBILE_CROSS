import { Component, OnInit } from '@angular/core';
import { AboutMe } from './about-me.model';
import { AboutMeService } from './about-me.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.page.html',
  styleUrls: ['./about-me.page.scss'],
})
export class AboutMePage implements OnInit {
  aboutMe:AboutMe[];
  
  constructor(private aboutService : AboutMeService) { }

  ngOnInit() {
    this.aboutMe = this.aboutService.getUser();
  }

}
