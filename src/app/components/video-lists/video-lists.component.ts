import { Component, QueryList, ViewChildren, ElementRef, Input, Output, EventEmitter, OnInit, ViewChild,  } from '@angular/core';
import { Product } from '../../Schema/product';


@Component({
  selector: 'app-video-lists',
  templateUrl: './video-lists.component.html',
  styleUrls: ['./video-lists.component.css']
})
export class VideoListsComponent implements OnInit {
  @Input('productInput') prod:Product;
  @ViewChildren('list') list: ElementRef;
  @Output('ProductInFocus') focus =new EventEmitter<Product>();
  test:any;




  constructor() { }


  ngOnInit(): void {
  }
onFocus(prod: Product){
  this.test=this.focus.emit(prod);
  //  console.log("fvfvf",this.test);
  

}

}
