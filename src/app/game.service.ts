import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Game } from './game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private gamesUrl = 'http://127.0.0.1:8000/api/game';

  constructor(private http: HttpClient) { }

  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.gamesUrl)
  }
}
