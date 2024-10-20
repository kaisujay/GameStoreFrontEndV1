import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { getGameCategories, getHeaderWrapperState, HeaderWrapperState } from '../@state/reducers/header-wrapper.reducer';
import { LoadGameCategoriesAction } from '../@state/actions/header-wrapper.action';
import { GameCategoriesModel, Platforms } from '../models/header-wrapper.model';

@Component({
  selector: 'app-header-wrapper',
  templateUrl: './header-wrapper.component.html',
  styleUrls: ['./header-wrapper.component.scss']
})
export class HeaderWrapperComponent implements OnInit {
  public dropdownOpenCatagories = false;
  public dropdownOpenProfile = false;
  public isDarkTheme = false;
  public categories = 'categories';

  public headerWrapperState$: Observable<HeaderWrapperState>;
  public gameCategories$: Observable<GameCategoriesModel[]>;
  public Platforms = Platforms;

  public constructor(private store$: Store){}

  public toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    document.body.classList.toggle('dark', this.isDarkTheme);
  }

  public ngOnInit(): void {
    this.store$.dispatch(new LoadGameCategoriesAction());

    this.gameCategories$ = this.store$.pipe(select(getGameCategories), map(item => item[this.categories]));
  }

}
