import { Routes } from '@angular/router';
import { ConfirmComponent } from './confirm/confirm.component';
import { PasswordRecoveryComponent } from './password-recovery/password-recovery.component';

export const routes: Routes = [
    {path:"password-recovery",component:PasswordRecoveryComponent},
    {path:"confirm",component:ConfirmComponent},
    {path:'',redirectTo:"password-recovery",pathMatch:'full'},
    {path:'**',redirectTo:"confirm"}
    
];
