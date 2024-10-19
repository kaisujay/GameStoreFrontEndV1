import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'games-list', 
    pathMatch: 'full' 
  },   
  { 
    path: 'games-list', 
    loadChildren: () => import('./modules/game/game.module').then(m => m.GameModule) 
  },
  { 
    path: 'support', 
    loadChildren: () => import('./modules/header-wrapper/modules/support/support.module').then(m => m.SupportModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    useHash: true,
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
