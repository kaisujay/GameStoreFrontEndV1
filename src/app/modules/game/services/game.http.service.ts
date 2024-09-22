import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from '../../shared/api.constant';
import { Observable } from 'rxjs';
import { GameListModel } from '../models/game-list.model';

@Injectable()
export class GameHttpService {

  public constructor(private http: HttpClient) { }

  public getGamesAll(): Observable<GameListModel[]> {
    return this.http.get<GameListModel[]>(API.games.all);
  }
}
