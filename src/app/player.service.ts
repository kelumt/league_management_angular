import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Player } from './player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private playersUrl = 'http://127.0.0.1:8000/api/player';

  constructor(private http: HttpClient) { }

  getPlayer(id: number): Observable<Player> {
    let url = `http://127.0.0.1:8000/api/player/${id}`;
    return this.http.get<Player>(url);
  }
}
