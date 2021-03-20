import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipes-book';
  loadedFeature = 'recipes';

  onNavigate(feature: string): void {
    this.loadedFeature = feature;
  }
}
