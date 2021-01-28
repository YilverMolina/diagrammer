import { NgModule } from '@angular/core';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';

const CustomLoaderFactory = () => new CustomLoader();

@NgModule({
    imports: [
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: CustomLoaderFactory
            }
        })
    ],
    exports: [TranslateModule]
})

export class AppTranslateModule { }

class CustomLoader implements TranslateLoader {
    getTranslation(lang: string): Observable<any> {
        return of(require(`../assets/i18n/${lang}.json`));
    }
}
