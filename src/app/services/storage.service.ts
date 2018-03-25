import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  constructor() { }

  arrdata1:Array<any>
  arrdata2:Array<any>

  storageData(i){
    this.arrdata1.push(i);
    localStorage.setItem("doing",JSON.stringify(this.arrdata1));
    console.log(this.arrdata1);
  }

  removeone(i){
    this.arrdata1.splice(i,1);
    localStorage.setItem("doing",JSON.stringify(this.arrdata1));
    console.log(this.arrdata1);
  }

  removetwo(i){
    this.arrdata2.splice(i,1);
    localStorage.setItem("finish",JSON.stringify(this.arrdata2));
    console.log(this.arrdata2);
  }

  changeone(i){
    this.arrdata2.push(this.arrdata1[i]);
    this.arrdata1.splice(i,1);
    localStorage.setItem("doing",JSON.stringify(this.arrdata1));
    localStorage.setItem("finish",JSON.stringify(this.arrdata2));
    console.log(this.arrdata1);
    console.log(this.arrdata2);
  }
  changetwo(i){
    this.arrdata1.push(this.arrdata2[i]);
    this.arrdata2.splice(i,1);
    localStorage.setItem("doing",JSON.stringify(this.arrdata1));
    localStorage.setItem("finish",JSON.stringify(this.arrdata2));
    console.log(this.arrdata1);
    console.log(this.arrdata2);
  }
  arr1(){
    if(JSON.parse(localStorage.getItem("doing"))){
      this.arrdata1 = JSON.parse(localStorage.getItem("doing"));
    }else{
      this.arrdata1 = [];
    }
  }
  arr2(){
    if(JSON.parse(localStorage.getItem("finish"))){
      this.arrdata2 = JSON.parse(localStorage.getItem("finish"));
    }else{
      this.arrdata2 = [];
    }
  }
}
