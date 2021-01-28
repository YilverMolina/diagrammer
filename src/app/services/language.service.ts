import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';
import * as moment from 'moment';
const languageDictionary = require('../contracts/json/lang-dictionary.json');

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private readonly DEFAULT_LANG = 'en';
  private readonly COOKIE_LANG_NAME = 'bzModLang';

  constructor(
    private translateService: TranslateService,
    private cookieService: CookieService) {
  }

  public setApplicationLanguage(): void {
    let lang: string;
    const cookieLang = this.cookieService.get(this.COOKIE_LANG_NAME) || this.translateService.currentLang;
    const browserLang = this.getNavigatorLanguage();
    if (cookieLang && languageDictionary[cookieLang]) {
      lang = cookieLang;
    } else if (languageDictionary[browserLang]) {
      lang = browserLang;
    }
    this.changeLanguage(languageDictionary[lang] || this.DEFAULT_LANG);
  }

  public setDefaultLanguage(): void {
    this.translateService.setDefaultLang(this.DEFAULT_LANG);
  }

  public changeLanguage(lang: string): void {
    this.translateService.use(lang);
    this.storeLanguage(lang);
  }

  public getText(key: string, params?: any): string {
    let text = '';
    this.translateService.get(key, params).subscribe(result => {
      text = result;
    });
    return text;
  }

  private storeLanguage(lang: string): void {
    moment.locale(lang);
    const expirationDate = new Date();
    expirationDate.setFullYear(expirationDate.getFullYear() + 1);
    this.cookieService.set(this.COOKIE_LANG_NAME, lang, expirationDate, '/');
  }

  private getNavigatorLanguage(): string {
    const localNavigator: any = navigator;
    let navigatorLanguage: string = localNavigator.language || localNavigator.userLanguage || '';
    return navigatorLanguage = navigatorLanguage.substring(0, 2);
  }
}
