import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fadeInOut', [
      state(
        'void',
        style({
          opacity: 0,
          transform: 'translateY(20px)',
        })
      ),
      transition('void <=> *', animate(500)),
    ]),
  ],
})
export class HomeComponent {
  downloadCV() {
    // Define the URL of your CV file
    const cvUrl = '/assets/AbdelkaderMiladiCV.pdf';
  
    // Open the URL in a new tab to trigger the download
    window.open(cvUrl, '_blank');
  }
}
