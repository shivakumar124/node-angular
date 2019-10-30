
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {

  product: any = {};
  angForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private bs: ProductService,
    private fb: FormBuilder) {
      this.createForm();
 }

  createForm() {
    this.angForm = this.fb.group({
        productname: ['', Validators.required ],
        price: ['', Validators.required ],
        description: ['', Validators.required ]
      });
    }
   

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.bs.editProduct(params['id']).subscribe(res => {
          console.log("edit data id details",res)
          this.product = res;
      });
    });
  }
  updateProduct(productname, price, description) {
    this.route.params.subscribe(params => {
       this.bs.updateProduct(productname, price, description, params['id']);
       
      //  window.location.reload();
 });
}
}
