import { Component } from '@angular/core';
import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'diagrammer';

  constructor(private languageService: LanguageService) {
    this.manageLanguage();
  }

  private manageLanguage(): void {
    this.languageService.setDefaultLanguage();
    this.languageService.setApplicationLanguage();
  }
}
