import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  
    recoverPassword() {
      // Add functionality to send recovery email here
      console.log('Recovery email sent');
    }
  }

