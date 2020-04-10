import { Component } from '@angular/core';

@Component({
  selector: 'fcode-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'freeCodeApp';
  options = { center: { lat: -15.7744219, lng: -48.077959 }, zoom: 4 };
  source = {
    background: 'url("../assets/kickflip.gif") no-repeat center',
    width: '100%'
  };
}
