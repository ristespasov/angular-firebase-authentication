import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-locale',
  templateUrl: './locale.component.html',
  styleUrls: ['./locale.component.scss'],
})
export class LocaleComponent implements OnInit {
  languages = ['en', 'mk'];
  language$: Observable<string> | undefined;

  constructor() {}

  ngOnInit(): void {
    // this.language$ = this.store.pipe(select(selectSettingsLanguage));
  }

  // onLanguageSelect(event: MatSelectChange) {
  //   this.store.dispatch(
  //     actionSettingsChangeLanguage({ language: event.value })
  //   );
  // }
}
