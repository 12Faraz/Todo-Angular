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
  Days:number =0;
  Complete:boolean=false;
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
  Completed = [{
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
        console.log()
        let curdate = new Date();
        console.log(curdate);
        let millis = new Date(this.Tasks.TaskDeadline).getTime() - curdate.getTime();
        this.Days= Math.floor((millis / (60*60*24*1000)))
      //Days = new Date() - this.Tasks.TaskDeadline  
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
  onDelete(event:any){
    this.Tasks2 = this.Tasks2.filter(name=>name!==event)
  }
  onCompletion(event:any){
    this.Completed.push({"TaskName":event.TaskName, "TaskPriority":event.TaskPriority,
    "TaskDeadline":event.TaskDeadline})
    this.Tasks2 = this.Tasks2.filter(name=>name!==event)
      console.log(this.Completed);
  }
  onCompleted() {
    this.Complete=true;
    console.log(this.Completed);
  }
  HideCompleted(){
    this.Complete = false;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
