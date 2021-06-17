import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HERstoriesPageRoutingModule } from './herstories-routing.module';

import { HERstoriesPage } from './herstories.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HERstoriesPageRoutingModule
  ],
  declarations: [HERstoriesPage]
})
export class HERstoriesPageModule {}
