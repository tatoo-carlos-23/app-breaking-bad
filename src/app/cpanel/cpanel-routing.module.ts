import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterComponent } from './pages/character/character.component';
import { CpanelComponent } from './cpanel.component';
import { DeathComponent } from './pages/death/death.component';
import { EpisodeComponent } from './pages/episode/episode.component';
import { QuoteComponent } from './pages/quote/quote.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'character',
  },
  {
    path: '',
    component: CpanelComponent,
    children: [
      {
        path: 'character',
        component: CharacterComponent,
      },
      {
        path: 'death',
        component: DeathComponent,
      },
      {
        path: 'episode',
        component: EpisodeComponent,
      },
      {
        path: 'quote',
        component: QuoteComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CpanelRoutingModule {}
