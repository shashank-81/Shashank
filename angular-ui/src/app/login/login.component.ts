import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { CanActivate, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup

  constructor(private dataService : DataService, private _router: Router) { }

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
      if(result['status'] === 200){
        localStorage.setItem('currentUser', JSON.stringify({'Username': this.loginForm.value.Username}))
        this._router.navigate(['/student'])
      }
      else{
        alert("Invalid Credentials")

      }
  })
  }

}
