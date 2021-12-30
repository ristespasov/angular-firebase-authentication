import { Component } from '@angular/core';

interface Item {
  name: string;
  age: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'e-store';
}
