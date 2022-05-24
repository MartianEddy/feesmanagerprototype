import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public students:{name:string, balance:number}[]=[]
  public selected:{name:string, balance:number}[]=this.students



  addstudent(name:string, balance:number){
    console.log('clicked');
    
    this.students.push({name, balance})
  }

 checkstudents(){
   this.selected=this.students
   return this.selected;
  
 }
 balance(){
   let filterdata=[]
   for(let student of this.students){
     if(student.balance>0){
       filterdata.push(student)
     }
   }
   this.selected=filterdata
   return this.selected;
 }
  
 cleared(){
  let filterdata=[]
  for(let student of this.students){
    if(student.balance<=0){
      filterdata.push(student)
    }
  }
  this.selected=filterdata
  return this.selected;
}
}
