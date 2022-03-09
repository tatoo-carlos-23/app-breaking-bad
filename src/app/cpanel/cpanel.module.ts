import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CpanelRoutingModule } from './cpanel-routing.module';
import { CpanelComponent } from './cpanel.component';
import { ShareModule } from '../share/share.module';


@NgModule({
  declarations: [
    CpanelComponent
  ],
  imports: [
    CommonModule,
    CpanelRoutingModule,
    ShareModule
  ]
})
export class CpanelModule { }
