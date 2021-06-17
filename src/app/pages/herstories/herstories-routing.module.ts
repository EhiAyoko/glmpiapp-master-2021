import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HERstoriesPage } from './herstories.page';

const routes: Routes = [
  {
    path: '',
    component: HERstoriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HERstoriesPageRoutingModule {}
