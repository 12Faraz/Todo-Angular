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
  TotalTasks:number=0;
  CompletedTasks:number=0;
  UncompletedTasks:number=0;
  Tasks = {
    TaskName:'',
    TaskPriority:'',
    TaskDeadline:'',
    NumberOfDays:0
  };
  Tasks2 = [{
    TaskName:'',
    TaskPriority:'',
    TaskDeadline:'',
    NumberOfDays:0
  }]
  Completed = [{
    TaskName:'',
    TaskPriority:'',
    TaskDeadline:''
  }]
  UnCompleted = [{
    TaskName:'',
    TaskPriority:'',
    TaskDeadline:''
  }]
  AddNewTask(){
    this.clicked=true;
    
  }
  TaskAdded(){
    if(this.Tasks.TaskName!="" && this.Tasks.TaskPriority!="" && this.Tasks.TaskDeadline!="" ){
      let curdate = new Date();
        console.log(curdate);
        let millis = new Date(this.Tasks.TaskDeadline).getTime() - curdate.getTime();
        this.Days= Math.floor((millis / (60*60*24*1000)))     
      if(this.Days+1>=0){
        console.log("Inside if" +this.Tasks.NumberOfDays)
        console.log(this.Days)
        this.Tasks2.push({"TaskName":this.Tasks.TaskName,"TaskPriority":this.Tasks.TaskPriority,
      "TaskDeadline":this.Tasks.TaskDeadline,"NumberOfDays":this.Days+1})
    }
    else {
      alert("Invalid Date! Cannot add past tasks")
    }
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
    this.TotalTasks = this.Tasks2.length-1;
    console.log("Length"+this.TotalTasks)
    if(this.Tasks2.length<=1){
      this.Tasks2 = [{
        TaskName:'',
        TaskPriority:'',
        TaskDeadline:'',
        NumberOfDays:0
      }]
    }
  }
  onReset(){
    this.first = false;
    if(confirm("Are you sure you want to reset")){
      this.Tasks2 = [{
        TaskName:'',
        TaskPriority:'',
        TaskDeadline:'',
        NumberOfDays:0
      }]

    }
    this.CompletedTasks=0;
    this.TotalTasks=0;
  }
  onDelete(event:any){
    this.Tasks2 = this.Tasks2.filter(name=>name!==event)
  }
  onCompletion(event:any){
    this.Completed.push({"TaskName":event.TaskName, "TaskPriority":event.TaskPriority,
    "TaskDeadline":event.TaskDeadline})
    this.Tasks2 = this.Tasks2.filter(name=>name!==event)
      console.log(this.Completed);
      this.CompletedTasks = this.Completed.length - 1;

  }
  onCompleted() {
    this.Complete=true;
  }
  HideCompleted(){
    this.Complete = false;
  }
 /* ShowUncompleted(){
    console.log(this.Tasks2)
    for(var i in this.Tasks2){
       console.log(this.Tasks2[i].TaskDeadline)
       let curdate = new Date();
        console.log(curdate);
        let millis = new Date(this.Tasks2[i].TaskDeadline).getTime() - curdate.getTime();
        this.Days= Math.floor((millis / (60*60*24*1000)))      
        console.log(this.Days)
        if(this.Days<0){
          this.Completed.push({"TaskName":this.Tasks2[i].TaskName, "TaskPriority":this.Tasks2[i].TaskPriority,
          "TaskDeadline":this.Tasks2[i].TaskDeadline})
        }
    }
    console.log(this.UnCompleted)
  }*/
  constructor() { }

  ngOnInit(): void {
  }

}
