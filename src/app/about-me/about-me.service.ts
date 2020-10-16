import { Injectable } from '@angular/core';
import { AboutMe } from './about-me.model';

@Injectable({
  providedIn: 'root'
})
export class AboutMeService {
  private aboutMe: AboutMe[] = [
    {
      id : 'id',
      name : 'Muhammad Abdurraffi',
      profile_picture : 'https://instagram.fcgk18-1.fna.fbcdn.net/v/t51.2885-19/s320x320/94437759_271063853944553_6356671041120501760_n.jpg?_nc_ht=instagram.fcgk18-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=iHoesTiAzgQAX_dQdG7&oh=0be47fb3321c898b8b723c8174eb2626&oe=5FAFF60B',
      nim : '00000022436',
      class : 'IF733-AL'
    }
]
  constructor() { }
 
  getUser(){
    return [...this.aboutMe];
  }
  getAbout(aboutId: string){
    return {...this.aboutMe.find(aboutMe=>{
      return aboutMe.id === aboutId;
    })};
  }
}
