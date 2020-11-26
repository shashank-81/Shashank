import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { CanActivate, Router } from '@angular/router';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  doubtform : FormGroup
  constructor(private dataService : DataService , private _router: Router) { }

  subjects: String[];
  selectedtopic: String;
  selectedsubtopic: String;
  subtopics: String[];
  description: String;

  ngOnInit(): void {
    this.subjects = ["OS", "DAA", "FLAT"];
   
  }

  onSubjectSelected(val: any)
  {
    console.log("Hello");
    if(val == "OS")
    {
        this.subtopics = ["CPU Scheduling","Memory Management","I/O Management"];
    }
    else if(val == "DAA")
    {
        this.subtopics = ["Branch and Bound","Travelling Salesman","Dynamic Programming"];
    }
    else if (val == "FLAT")
    {
        this.subtopics = ["Pushdown Automata","State Diagram","Turing Machine"];
    }
  }

  onupload(){
    console.log(this.doubtform)
    this.dataService.doubt(
      this.selectedtopic,
      this.selectedsubtopic,
      this.description

    ).subscribe(result=>{
      console.log(result)
      window.location.reload()
      //this._router.navigate(['/account'])
      alert("Doubt added successfully")


    })
  }


}
