import { Component } from '@angular/core';

@Component({
  selector: 'fcode-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'freeCodeApp';
  source = {
    background: 'url("../assets/kickflip.gif") no-repeat center',
    width: '100%'
  };
}
