import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from '../home.service';
import { AlertController, ToastController } from '@ionic/angular';
import { General } from '../home_general.model';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.page.html',
  styleUrls: ['./item-detail.page.scss'],
})
export class ItemDetailPage implements OnInit {
  loadedItems : General;
  constructor(
      private activeRoute: ActivatedRoute,
      private homeServices: HomeService,
      private route: Router,
      private alert: AlertController,
      private confirm: ToastController
  ) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(paramMap =>{
      if(!paramMap.has('homeId')){return;}
      const homeId = parseInt(paramMap.get('homeId'));
      this.loadedItems = this.homeServices.getItem(homeId);
    });
  }
  favItem(){
    console.log('added to favourite');
    this.favToast();
  }
  deleteItem(){
    this.homeServices.deleteItem(this.loadedItems.id);
    this.route.navigate(['/home']);
    this.deleteToast();
  }

  async deleteConfirm(){
    const conf = await this.alert.create({
      header : "Delete this item?", 
      message : 'Do you want to delete this item?',
      buttons:[
        {
          text:'Cancel',
          role:'cancel'
        },
        {
          text: 'Sure thing!',
          handler:() =>this.deleteItem()
        }
      ]
    });
    await conf.present();
  }

  async favToast() {
    const favToast = await this.confirm.create({
      message: 'Added to favourite :)',
      color: 'tertiary',
      duration: 2000
    });
    favToast.present();
  }

  async deleteToast() {
    const toast = await this.confirm.create({
      message: 'Data have been deleted.',
      color: 'danger',
      duration: 2000
    });
    toast.present();
  }

}
