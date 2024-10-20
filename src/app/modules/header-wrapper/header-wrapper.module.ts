import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderWrapperRoutingModule } from './header-wrapper-routing.module';
import { HeaderWrapperComponent } from './component/header-wrapper.component';
import { SupportModule } from './modules/support/support.module';
import { provideHttpClient } from '@angular/common/http';
import { GameCategoriesService } from './services/game-categories.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { LoadGameCategoriesEffect } from './@state/effects/load-game-categories.effect';
import { HeaderWrapperStateReducer } from './@state/reducers/header-wrapper.reducer';
import { LoadGamesByCategoriesEffect } from './@state/effects/load-games-by-categories.effect';

@NgModule({
  declarations: [
    HeaderWrapperComponent
  ],
  imports: [
    CommonModule,
    SupportModule,
    StoreModule.forFeature('headerWrapperState', HeaderWrapperStateReducer),
    EffectsModule.forFeature([
      LoadGameCategoriesEffect,
      LoadGamesByCategoriesEffect
    ]),
    HeaderWrapperRoutingModule
  ],
  exports:[HeaderWrapperComponent],
  providers:[
    GameCategoriesService, 
    provideHttpClient()  // This has replaced "HttpClientModule"
  ]
})
export class HeaderWrapperModule { }
