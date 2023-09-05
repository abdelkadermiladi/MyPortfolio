import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Import HttpClient
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css'],
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
export class ContactPageComponent {


sender: string = '';
email: string = '';
message: string = '';

constructor(private http: HttpClient) {} // Inject HttpClient

submitForm() {
  const formData = {
    sender: this.sender,
    email: this.email,
    message: this.message,
  };

  // Replace 'backend-url' with the actual URL of your Spring Boot backend endpoint
  this.http.post('http://localhost:8080/contact', formData).subscribe(
    (response) => {
      // Handle the successful response here, e.g., show a success message
      console.log('Email sent successfully:', response);
    },
    (error) => {
      // Handle errors here, e.g., show an error message
      console.error('Error sending email:', error);
    }
  );
}
}