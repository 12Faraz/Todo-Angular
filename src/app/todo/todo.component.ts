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
    if(this.Tasks.TaskName!="" && this.Tasks.TaskPriority!="" && this.Tasks.TaskDeadline!=""){
      this.Tasks2.push({"TaskName":this.Tasks.TaskName,"TaskPriority":this.Tasks.TaskPriority,
      "TaskDeadline":this.Tasks.TaskDeadline})  
    }
    else {
      alert("All fields are required!")
    }
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
