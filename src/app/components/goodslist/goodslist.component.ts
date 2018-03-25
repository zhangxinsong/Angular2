import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; 
import { Http,Jsonp } from "@angular/http";  
// import { parse } from 'path';
@Component({
  selector: 'app-goodslist',
  templateUrl: './goodslist.component.html',
  styleUrls: ['./goodslist.component.css']
})
export class GoodslistComponent implements OnInit {

  constructor(public router:ActivatedRoute, public http:Http, public jsonp:Jsonp ) { 

  }
  num:Number
  @Input() list:Array<any>;
  ngOnInit() {
    this.jsonp.get("http://datainfo.duapp.com/shopdata/getGoods.php?callback=JSONP_CALLBACK").subscribe(data => {
      this.goodlist = data._body;
      console.log(data._body[0]);
    },err =>{
      console.log(err);
    })
  }

  goodlist

  // goDetail(idx){
  //   this.router.navigate(['gooddetail',idx])
  // }
  fn(){
    console.log(this.goodlist)
  }

}
