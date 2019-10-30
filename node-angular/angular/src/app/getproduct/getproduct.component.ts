import { Component, OnInit } from '@angular/core';
import Product from '../product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-getproduct',
  templateUrl: './getproduct.component.html',
  styleUrls: ['./getproduct.component.css']
})
export class GetproductComponent implements OnInit {
  productlist: Product[];
  constructor(private bs: ProductService,private router: Router,) { }

  ngOnInit() {
    this.bs
      .getproductes()
      .subscribe((data: Product[]) => {
        console.log("productList",data)
        this.productlist = data;
      });
  }
  deleteProduct(id) {
    
    this.bs.deleteProduct(id).subscribe(res => {
      alert("Delete Successfully")
      window.location.reload();
      // this.router.navigate(['/product']);
      console.log('Deleted');
    });
  }
  editProduct(id) {
    const httpOptions={
      headers: new HttpHeaders({'Content-Type':'applicaion/json'})
     }
    this.bs.editProduct(id).subscribe(res => {
      this.router.navigate(['/product/edit/',id]);
      console.log('edit');
    });
    
    }

}
