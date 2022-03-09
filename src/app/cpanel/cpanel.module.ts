import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CpanelRoutingModule } from './cpanel-routing.module';
import { CpanelComponent } from './cpanel.component';
import { ShareModule } from '../share/share.module';
import { CharacterComponent } from './character/character.component';
import { EpisodeComponent } from './episode/episode.component';
import { QuoteComponent } from './quote/quote.component';
import { DeathComponent } from './death/death.component';


@NgModule({
  declarations: [
    CpanelComponent,
    CharacterComponent,
    EpisodeComponent,
    QuoteComponent,
    DeathComponent
  ],
  imports: [
    CommonModule,
    CpanelRoutingModule,
    ShareModule
  ]
})
export class CpanelModule { }
