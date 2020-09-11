
import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../Schema/product';
// import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.css']
})
export class VideoDetailsComponent implements OnInit {
  // zoomed:any;
  @Input('productDetails') prod : Product;

  public editTitle : boolean = false;
   slideIndex = 1;

  constructor() { }
  ngOnInit(): void {
  }
  ngOnChanges(){
    this.editTitle=false;
  }
        onClickTitle(){
          this.editTitle=true;
          console.log("focus in called");
        }
        focusOut(){
          this.editTitle=false;
console.log("focus out called");
}
// focusIn(){
//   console.log("focus in called");

//       }
 openModal() {
  (document.getElementById("myModal")as HTMLElement).style.display = "block";
}

 closeModal() {
  (document.getElementById("myModal") as HTMLElement).style.display = "none";
}

// showSlides(slideIndex){
//   console.log("tst",slideIndex)
// };

 plusSlides( n:any) {
  this.showSlides(this.slideIndex +=  n);
}

 currentSlide( n:any) {
  this.showSlides(this.slideIndex =  n);
}

 showSlides( n:any) {
  let i : any;
  let slides = (document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>);
  let dots = (document.getElementsByClassName("demo") as HTMLCollectionOf<HTMLImageElement>);
  let captionText = (document.getElementById("caption") as HTMLElement);
  
  // const slide = slides[i] as HTMLElement;
  // const dot = dots[i] as HTMLElement;

  if (n > slides.length) {this.slideIndex = 1}
  if (n < 1) {this.slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}
for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}
slides[this.slideIndex-1].style.display = "block";
dots[this.slideIndex-1].className += " active";
captionText.innerHTML = dots[this.slideIndex-1].alt;
}
test:boolean=false;
features(p : any){
  // window.open(p);
  this.test=!this.test;
  console.log("chckkk",p);
  }
  editItem(){
    alert("Edit box will appear soon....");
    console.log("editedddd");
  }

   removeItem(name: string) {
    if(confirm("Are you sure to delete "+name)) {
      alert("item deleted");
      console.log("item deleted");
    }
  
 }
// stylesObj =  {'font-size': '1.1em', color: 'red'}
 
}
