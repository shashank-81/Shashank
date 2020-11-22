import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  editForm : FormGroup
  constructor(private dataService : DataService) { }

  ngOnInit(): void {
    this.editForm = new FormGroup({
      FirstName : new FormControl('' , [Validators.required]),
      LastName : new FormControl('', [Validators.required]),
      RollNo : new FormControl('', [Validators.required]),
      EmialId : new FormControl('', [Validators.required]),
      MobileNo : new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    console.log(this.editForm)
   
  }

}
