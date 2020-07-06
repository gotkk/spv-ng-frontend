import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'spv-ng-frontend';
  test = { a: 'hello', b: 'world' };
  c = 0;
  onClick() {
    this.c++;
  }
}
