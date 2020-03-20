import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './games/games.component';
import { TeamsComponent } from './teams/teams.component';
import { TeamDetailComponent }  from './team-detail/team-detail.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component'

const routes: Routes = [
  { path: 'games', component: GamesComponent },
  { path: 'teams', component: TeamsComponent },
  { path: '', redirectTo: '/games', pathMatch: 'full' },
  { path: 'team-detail/:id', component: TeamDetailComponent },
  { path: 'player-detail/:id', component: PlayerDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }