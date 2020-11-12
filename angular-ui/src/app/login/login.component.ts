import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  getDetails(user: HTMLInputElement, pass: HTMLInputElement): boolean {
    console.log(`Username: ${user.value} and Password: ${pass.value}`);
    return false;
   }
  ngOnInit(): void {
  }

}
