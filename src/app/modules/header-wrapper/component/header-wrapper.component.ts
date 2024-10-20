import { Component } from '@angular/core';

@Component({
  selector: 'app-header-wrapper',
  templateUrl: './header-wrapper.component.html',
  styleUrls: ['./header-wrapper.component.scss']
})
export class HeaderWrapperComponent {

  public dropdownOpenCatagories = false;
  public dropdownOpenProfile = false;
  public isDarkTheme = false;

  public toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    document.body.classList.toggle('dark', this.isDarkTheme);
  }

}
