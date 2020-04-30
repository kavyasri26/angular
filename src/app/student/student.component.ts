import { Component, OnInit } from '@angular/core';
import { StudentserviceService } from '../studentservice.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  studentData: any = '';

  constructor(private studentService:StudentserviceService) { }
  public fetchdata(){
    // this.studentService.getData().subscribe(result => {
    //   this.studentData = result;
    // });
    this.studentData = this.studentService.getData();
  
  }
  public postNewData(){
    let Student= {
      "stdID":"4",
    "stdName":"jhon",
    "stdgrade": "A",
    "course":"CS",
    "address":"Chennai",
    "phno":"987654431", 
  }

  this.studentService.postData(Student).subscribe( result => {
    console.log(result,Student);
  });
 
  }
public putNewData(){
  let Student= { 
    "stdID":"4",
    "stdName":"jhonson",
    "stdgrade": "A",
    "course":"CS",
    "address":"Chennai",
    "phno":"987654431",
 }
 let StudentID= 4 
 this.studentService.putData(Student,StudentID).subscribe(result => {
   console.log(result);
 });
  }

public deleteOneData(){
  let StudentID= 2;
  this.studentService.deleteData(StudentID).subscribe(result => {
    console.log(result);
  });
}  

ngOnInit(){

}
}


