import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  subjects: String[];
  selectedtopic: String;
  selectedsubtopic: String;
  subtopics: String[];
  
   

  constructor() { }
  
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
    

}
