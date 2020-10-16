import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home/home.service';
import { AlertController, ToastController, IonItemSliding } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { General } from '../home/home_general.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  admin:General[];
  
  constructor(
    private adminService : HomeService,
    private route: Router,
    private alert: AlertController,
    private confirm: ToastController
  ) { }

  ngOnInit() {

  }
  ionViewWillEnter(){
    this.admin = this.adminService.getAllItem();
  }

  editItem(admin: General, slidingItem:IonItemSliding){
    slidingItem.close();
    this.editedToast();
  }
  deleteItem(admin:General, slidingItem:IonItemSliding){
    this.adminService.deleteItem(admin.id);
    this.admin = this.adminService.getAllItem();
    this.deleteToast();
  }

  async deleteConfirm(admin:General, slidingItem:IonItemSliding){
    slidingItem.close();
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
          handler:() =>this.deleteItem(admin,slidingItem)
        }
      ]
    });
    await conf.present();
  }

  async editedToast() {
    const editToast = await this.confirm.create({
        message: 'Data have been edited (to be continued).',
        color: 'success',
        duration: 2000
      });
      editToast.present();
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
