import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from '../../shared/utils/api.constant';
import { Observable } from 'rxjs';
import { GameListModel } from '../models/game-list.model';
import { APIBuilder } from '../../shared/utils/utils';
import { CreateUpdateGameModel } from '../models/create-game.model';

@Injectable()
export class GameHttpService {

  public constructor(private http: HttpClient) { }

  public getGamesAll(): Observable<GameListModel[]> {
    return this.http.get<GameListModel[]>(API.games.all);
  }

  public getOneById(id: string): Observable<GameListModel> {
    return this.http.get<GameListModel>(APIBuilder(API.games.oneById, id));
  }

  public getGamesByName(name: string): Observable<GameListModel[]> {
    return this.http.get<GameListModel[]>(APIBuilder(API.games.allByName, name));
  }

  public createGame(payload: CreateUpdateGameModel): Observable<string> {
    return this.http.post<string>(API.games.createGame, payload);
  }

  public updateGame(id: string, payload: CreateUpdateGameModel): Observable<GameListModel> {
    return this.http.put<GameListModel>(APIBuilder(API.games.updateGame, id), payload);
  }
}
