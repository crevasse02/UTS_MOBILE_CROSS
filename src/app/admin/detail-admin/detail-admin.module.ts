import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailAdminPageRoutingModule } from './detail-admin-routing.module';

import { DetailAdminPage } from './detail-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailAdminPageRoutingModule
  ],
  declarations: [DetailAdminPage]
})
export class DetailAdminPageModule {}
