import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from 'src/app/home/home.service';
import { AlertController, ToastController } from '@ionic/angular';
import { General } from 'src/app/home/home_general.model';

@Component({
  selector: 'app-detail-admin',
  templateUrl: './detail-admin.page.html',
  styleUrls: ['./detail-admin.page.scss'],
})
export class DetailAdminPage implements OnInit {
  admin : General;
  constructor(
      private activeRoute: ActivatedRoute,
      private homeServices: HomeService,
      private route: Router,
      private alert: AlertController,
      private confirm: ToastController
  ) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(paramMap =>{
      if(!paramMap.has('adminId')){return;}
      const adminId = parseInt(paramMap.get('adminId'));
      this.admin = this.homeServices.getItem(adminId);
    });
  }

  editItem(){
    console.log("edited");
    this.editedToast();
  }

  deleteItem(){
    this.homeServices.deleteItem(this.admin.id);
    this.route.navigate(['/admin']);
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

  async editedToast() {
    const editToast = await this.confirm.create({
      message: 'Data have been edited (To be continued).',
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
