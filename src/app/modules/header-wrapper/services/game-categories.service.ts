import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GameCategoriesModel } from '../models/header-wrapper.model';
import { API } from '../../shared/utils/api.constant';
import { APIBuilder } from '../../shared/utils/utils';

@Injectable()
export class GameCategoriesService {

  public constructor(private http: HttpClient) { }

  public getGameCatagoriesAll(): Observable<GameCategoriesModel[]> {
    return this.http.get<GameCategoriesModel[]>(API.gamePlatformType.getGameCatagories);
  }

  public getGameByCategoryName(name: string): Observable<GameCategoriesModel[]> {
    return this.http.get<GameCategoriesModel[]>(APIBuilder(API.gamePlatformType.getGameByCategoryName, name));
  }
}
