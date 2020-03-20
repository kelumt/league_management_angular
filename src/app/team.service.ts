import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Team } from './team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private teamsUrl = 'http://127.0.0.1:8000/api/team';

  constructor(private http: HttpClient) { }

  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(this.teamsUrl)
  }

  getTeam(id: number): Observable<Team> {
    let url = `http://127.0.0.1:8000/api/team/${id}`;
    return this.http.get<Team>(url);
  }
}
