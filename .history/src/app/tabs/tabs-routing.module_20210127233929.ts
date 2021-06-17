import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../pages/home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'herstories',
        loadChildren: () => import('../pages/herstories/herstories.module').then( m => m.HERstoriesPageModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('../pages/contact/contact.module').then( m => m.ContactPageModule)
      },
      {
        path: 'checkin',
        loadChildren: () => import('../pages/checkin/checkin.module').then( m => m.CheckinPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
