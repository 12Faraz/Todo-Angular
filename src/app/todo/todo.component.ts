import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  clicked:boolean=false;
  submitted:boolean=false;
  first:boolean = false;
  Tasks = {
    TaskName:'',
    TaskPriority:'',
    TaskDeadline:''
  };
  Tasks2 = [{
    TaskName:'',
    TaskPriority:'',
    TaskDeadline:''
  }]
  AddNewTask(){
    this.clicked=true;
    
  }
  TaskAdded(){
    this.Tasks2.push({"TaskName":this.Tasks.TaskName,"TaskPriority":this.Tasks.TaskPriority,
    "TaskDeadline":this.Tasks.TaskDeadline})
    console.log(this.Tasks2)
    console.log(this.Tasks2.length)
    if(this.Tasks2.length==1){
      this.first = false;
  }
  else {
    this.first = true;
  }
    this.submitted=true;
  }
  onReset(){
    this.first = false;
    if(confirm("Are you sure you want to reset")){
      this.Tasks2 = [{
        TaskName:'',
        TaskPriority:'',
        TaskDeadline:''
      }]

    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
