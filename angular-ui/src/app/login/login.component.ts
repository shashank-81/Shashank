import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup

  constructor(private dataService : DataService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      Username : new FormControl('' , [Validators.required]),
      Password : new FormControl('' , [Validators.required])
    });
    
  }

  onSubmit(){
    console.log(this.loginForm)
    this.dataService.login(
      this.loginForm.value.Username,
      this.loginForm.value.Password
    ).subscribe(result => {
      console.log("=========================")
      console.log(result)
  })
  }

}
