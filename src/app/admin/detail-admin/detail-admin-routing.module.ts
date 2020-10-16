import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailAdminPage } from './detail-admin.page';

const routes: Routes = [
  {
    path: '',
    component: DetailAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailAdminPageRoutingModule {}
