import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  // ( ) event binding - component to DOM
  // [ ] property binding - DOM to Component

  name: String = 'Ward';
  title = 'PAPA PROJECT';
  nameColor = 'blue';

  changeColorName() {
    this.nameColor = this.nameColor === 'blue' ? 'red' : 'blue'
  }
}
