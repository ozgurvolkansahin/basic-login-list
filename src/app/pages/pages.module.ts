import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { PagesAuthGuard } from './pages-guard.service';
import { SharedModule } from '../shared/shared.module';
import { DashboardData } from './dashboard/data/dashboard.data';
import { DashboardService } from './dashboard/service/dashboard.service';

const DATA_SERVICES = [
  {provide: DashboardData, useClass: DashboardService}
];

@NgModule({
  declarations: [
    PagesComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
  ],
  providers: [
    PagesAuthGuard,
    ...DATA_SERVICES,
  ]
})
export class PagesModule { }
