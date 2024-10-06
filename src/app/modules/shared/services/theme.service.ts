import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  public constructor(@Inject(DOCUMENT) private document: Document) { }
  private activeTheme = 'light';

  public switchTheme(){
    const themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;

    if (this.activeTheme == 'light') {
      this.activeTheme='dark';
      themeLink.href = 'dark.css';
    } else {
      this.activeTheme='light';
      themeLink.href = 'light.css';
    }
  }

  public getTheme(){
    return this.activeTheme;
  }
}
