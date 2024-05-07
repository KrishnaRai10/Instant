import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../interface';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrl: './seller-home.component.css'
})
export class SellerHomeComponent implements OnInit {
  productList:undefined|Product[]
  productMessage:string=''
  icon=faTrash
  editIcon=faEdit
constructor(private product: ProductService ){}
  ngOnInit(): void {
    this.listing()
  }
  deleteProduct(data:string){
    this.product.deleteProduct(data).subscribe((res)=>{
      if(res){
        this.productMessage="Product Deleted"
        this.listing()
      }
    })
   }
   listing(){
    this.product.showProduct().subscribe((res)=>{
      this.productList=res
          })
   }
}
