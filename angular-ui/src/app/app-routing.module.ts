import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VerificationComponent } from './verification/verification.component';
import { StudentComponent } from './student/student.component';
import {AccountComponent} from './account/account.component'; 
import {PswdresetComponent} from './pswdreset/pswdreset.component';
import {CalendarComponent} from './calendar/calendar.component';
const routes: Routes = [
  {path:'', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'verification', component: VerificationComponent},
  {path: 'student', component: StudentComponent},
  {path: 'account', component: AccountComponent},
  {path: 'reset', component: PswdresetComponent},
  {path: 'calendar', component: CalendarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, RegisterComponent, VerificationComponent, StudentComponent, AccountComponent, PswdresetComponent, CalendarComponent]
