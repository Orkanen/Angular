import { Component } from '@angular/core';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  title = 'Demo';
  greeting = {'id': 'XXX', 'content': 'Hello World'};
}