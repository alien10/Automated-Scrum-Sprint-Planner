import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { ApplicationComponent } from './app/application/application.component';
@Component({
  selector: 'app-root',
  imports: [ApplicationComponent],
  template: `
    <app-application></app-application>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
