import { Component, OnInit } from '@angular/core';
import { GameHttpService } from '../services/game.http.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  public constructor(){}
  
  public ngOnInit(): void {
    
  }
}
