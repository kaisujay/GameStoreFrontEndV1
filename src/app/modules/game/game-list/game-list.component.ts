import { Component, OnInit } from '@angular/core';
import { GameHttpService } from '../services/game.http.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  public constructor(public gameService: GameHttpService){}
  
  public ngOnInit(): void {
    this.gameService.getGamesAll().subscribe(data => {
      console.log(data)
    });
  }
}
