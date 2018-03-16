import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() txt;

  @Output() value = new EventEmitter<any>();

  fn(i){
    this.value.emit(i);
    this.txt = "";
  }
}
