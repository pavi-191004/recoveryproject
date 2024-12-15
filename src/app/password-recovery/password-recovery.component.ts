import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-password-recovery',
  imports: [],
  templateUrl: './password-recovery.component.html',
  styleUrl: './password-recovery.component.css'
})
export class PasswordRecoveryComponent {
  constructor(private router:Router){
   
  }
  
    recoverPassword() {
      
      // Add functionality to send recovery email here
      //console.log('Recovery email sent');
      //this.router.navigate(["/confirm"])
     
        const emailInput = (document.querySelector('input[type="email"]') as HTMLInputElement).value;
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      
        if (emailPattern.test(emailInput)) {
          console.log('Valid email, proceeding to reset confirmation page.');
          this.router.navigate(['/confirm']);
        } else {
          console.log('Invalid email address. Please enter a valid email.');
          alert('Invalid email address. Please enter a valid email.');
        }
      }
      
     
    }
  



