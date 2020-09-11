import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Schema/product';
import { ProductService } from 'src/app/Service/product.service';
// import { ProductService } from 'src/app/Service/product.service';



@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  products : Array<Product>
selectedProd:Product;
hideNewVideo:boolean=true;

constructor(private _prodService:ProductService) { }
// this.userService.getUsers().subscribe(
//   response => {
//     if (!response) {
//       console.log(Error)
//     } else {
//       console.log(response)
//       let users : User[] = response
//     }
//   })
ngOnInit(): void {
  this._prodService.getVideos()
  .subscribe(resProduct=>{
    if(!resProduct)  {
            console.log(Error);
          }
    else{
      console.log(resProduct)
    }
      this.products=resProduct
  // console.log("chck",this.products);
})
}
onSelectedProd(prod:any){
this.selectedProd=prod;
this.hideNewVideo=true;
console.log("Product selected",this.selectedProd);
}
onSubmit(prod:Product){
  this._prodService.addProduct(prod)
  .subscribe((resNewProd: Product) => { 
    if(!resNewProd)  {
      console.log(Error);
    }
    else{

      this.products.push(resNewProd);
      this.selectedProd=resNewProd;
      this.hideNewVideo=true;
      console.log("new prod",resNewProd)
    }
  });
}
loadVideo(){
  this.hideNewVideo=false;
}
}