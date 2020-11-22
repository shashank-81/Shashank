import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pswdreset',
  templateUrl: './pswdreset.component.html',
  styleUrls: ['./pswdreset.component.css']
})
export class PswdresetComponent implements OnInit {

  registrationForm : FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
