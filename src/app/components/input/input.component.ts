import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor(public storage:StorageService) {}

  ngOnInit() {
    this.storage.arr1();
    this.storage.arr2();
  }

  //利用@Output传值
  // @Input() txt;

  // @Output() value = new EventEmitter<any>();

  // fn(i){
  //   this.value.emit(i);
  //   this.txt = "";
  // }

  txt:any

  cleartxt(){
    this.txt = "";
  }
}
