import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
  backgroundImage!: string;
  
    constructor() {
      this.setResponsiveBackground();
      window.addEventListener('resize', () => this.setResponsiveBackground());
    }
  
    setResponsiveBackground() {
      // Determine which image to use based on screen size
      if (window.innerWidth < 768) {
        this.backgroundImage = 'assets/background.jpg';
      } else {
        this.backgroundImage = 'assets/background.jpg';
      }
    }
  }