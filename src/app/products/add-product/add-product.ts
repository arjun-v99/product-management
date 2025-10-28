import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  imports: [ReactiveFormsModule],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css',
})
export class AddProduct {
  productForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      name: this.fb.control('', [Validators.required, Validators.maxLength(255)]),
      price: this.fb.control('', [Validators.required]),
      imageUrl: this.fb.control('', [Validators.required, Validators.maxLength(400)]),
      description: this.fb.control('', [Validators.required, Validators.maxLength(400)]),
    });
  }

  addProduct() {
    if (this.productForm.valid) {
      console.log(1);
    } else {
      console.log(2);
    }
  }
}
