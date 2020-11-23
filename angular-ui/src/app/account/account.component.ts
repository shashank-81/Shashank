import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { CanActivate, Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  emailId: String;
  firstName: String;
  lastName: String;
  mobile: String;
  rollNo: String;


  editForm : FormGroup
  currentUser = ''
  constructor(private dataService : DataService, private _router: Router) { }

  ngOnInit(): void {
    this.editForm = new FormGroup({
      FirstName : new FormControl('' , [Validators.required]),
      LastName : new FormControl('', [Validators.required]),
      RollNo : new FormControl('', [Validators.required]),
      EmailId : new FormControl('', [Validators.required]),
      MobileNo : new FormControl('', [Validators.required])
    });
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.dataService.acc_det(this.currentUser['Username']).subscribe( result => {
      
      
      this.emailId = result['EmailId'];
      this.firstName = result['FirstName'];
      this.lastName = result['LastName'];
      this.mobile = result['MobileNo'];
      this.rollNo = result['RollNo'];


      console.log(result)


      
    })
  }

  onSubmit() {
    console.log(this.editForm)
    this.dataService.acc_det
   
  }

  logout(){
    localStorage.removeItem('currentUser');
    this._router.navigate(['/login'])
  }

}
