import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { TeamService }  from '../team.service';
import { Team } from '../team';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit {

  team: Team;

  constructor(private route: ActivatedRoute,
              private teamService: TeamService,
              private location: Location) { }

  ngOnInit(): void {
    this.getTeamDetail();
  }

  getTeamDetail(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.teamService.getTeam(id)
                    .subscribe(team => this.team = team);
  }

}
