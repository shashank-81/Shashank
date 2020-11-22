import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { CanActivate, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationForm : FormGroup;

  constructor( private dataService : DataService, private _router: Router) {}

  ngOnInit() {
    this.registrationForm = new FormGroup({ 
      FirstName : new FormControl('' , [Validators.required]),
      LastName : new FormControl('', [Validators.required]),
      RollNo : new FormControl('', [Validators.required]),
      EmialId : new FormControl('', [Validators.required]),
      MobileNo : new FormControl('', [Validators.required]),
      Password :new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    console.log(this.registrationForm)
    this.dataService.registration(
      this.registrationForm.value.FirstName,
      this.registrationForm.value.LastName,
      this.registrationForm.value.RollNo,
      this.registrationForm.value.EmialId,
      this.registrationForm.value.MobileNo,
      this.registrationForm.value.Password
    ).subscribe(result => {
      this._router.navigate(['/login'])
      console.log(result)
    })
  }  

}
