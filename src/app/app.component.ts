import { Component } from '@angular/core';
import { ThemeService } from './modules/shared/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'GameStoreFrontEndV1';

  public constructor(private themeService: ThemeService){}

  public changeTheme(){
    this.themeService.switchTheme();
  }

  public isDarkMode(){
    const theme = this.themeService.getTheme();

    return theme.includes('dark') ? true : false;
  }
}
