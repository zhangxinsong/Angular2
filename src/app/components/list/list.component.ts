import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  @Input() arrData:Array<any>;
  arrData1:Array<any>=[];
  
  bian(i){
    this.arrData1.push(this.arrData[i]);
    this.arrData.splice(i,1);
  }
  
  bian1(i){
    this.arrData.push(this.arrData1[i]);
    this.arrData1.splice(i,1);
  }
  
  del(i){
    this.arrData.splice(i,1);
  }
  
  del1(i){
    this.arrData1.splice(i,1);
  }

}
