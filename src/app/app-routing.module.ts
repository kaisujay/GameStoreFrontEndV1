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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
