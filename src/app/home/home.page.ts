import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HomeService } from './home.service';
import { General } from './home_general.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage{
  @ViewChild('listview') listview: ElementRef;
  @ViewChild('gridview') gridview: ElementRef;
  home: General[];
  view: boolean = true;
  constructor(
    private electroService: HomeService
  ) {}

  ionViewWillEnter(){
    this.home = this.electroService.getAllItem();
  }

  changeView(event: any){
    if(event.target.children[0].attributes[2].value == 'grid-outline') {
      event.target.children[0].attributes[2].value = 'list-outline';
      this.view = false;
    }
    else if(event.target.children[0].attributes[2].value == 'list-outline') {
      event.target.children[0].attributes[2].value = 'grid-outline';
      this.view = true;
    }
  }

}
