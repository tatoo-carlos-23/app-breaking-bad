import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CpanelRoutingModule } from './cpanel-routing.module';
import { CpanelComponent } from './cpanel.component';
import { ShareModule } from '../share/share.module';
import { CharacterComponent } from './pages/character/character.component'; 
import { DeathComponent } from './pages/death/death.component';
import { EpisodeComponent } from './pages/episode/episode.component';
import { QuoteComponent } from './pages/quote/quote.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    CpanelComponent,
    CharacterComponent,
    EpisodeComponent,
    QuoteComponent,
    DeathComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    CpanelRoutingModule,
    ShareModule
  ]
})
export class CpanelModule { }
