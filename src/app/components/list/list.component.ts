import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StorageService } from "../../services/storage.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(public storage:StorageService) {}

  ngOnInit() {
    this.storage.arr1();
    this.storage.arr2();
  }

  
  //利用@Input传值
  // @Input() arrData:Array<any>;
  // arrData1:Array<any>=[];
  
  // bian(i){
  //   this.arrData1.push(this.arrData[i]);
  //   this.arrData.splice(i,1);
  // }
  
  // bian1(i){
  //   this.arrData.push(this.arrData1[i]);
  //   this.arrData1.splice(i,1);
  // }
  
  // del(i){
  //   this.arrData.splice(i,1);
  // }
  
  // del1(i){
  //   this.arrData1.splice(i,1);
  // }

}
