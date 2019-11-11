import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../core/services/categoryService/category.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.page.html',
  styleUrls: ['./add-products.page.scss'],
})
export class AddProductsPage implements OnInit {

  productForm: FormGroup;

  validationMessages = {
    title: [
      { type: 'required', message: 'Title is required' },
      { type: 'text', message: 'Not a valid address' },
      { type: 'minlength', message: 'Title must be longer than 5 characters' },
      { type: 'maxlength', message: 'Title must be less than 30 characters' }
    ],
    price: [
      { type: 'required', message: 'Price is required' },
      { type: 'number', message: 'Not a valid number' },
      { type: 'minlength', message: 'Price must be more than 10 CHF' },
      { type: 'maxlength', message: 'Price must be lower than 1000000 CHF' }
    ],
    location: [
      { type: 'required', message: 'Location is required' },
      { type: 'text', message: 'Not a valid location' },
      { type: 'maxlength', message: 'Location must be less than 30 characters' }
    ]
  };
  message;
  categories: any = [];
  chosenSubcategories = [];

  constructor(
      private categoryService: CategoryService,
      private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    });
    this.productForm = this.formBuilder.group({
      title: ['', [ Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
      price: ['', [ Validators.required, Validators.minLength(2), Validators.maxLength(6)]],
      location: ['', [ Validators.required, Validators.maxLength(30)]]
    });
  }

  displayChosenSubcategories(event) {
    const slug = event.target.value;
    this.chosenSubcategories = this.categories.filter(cat => cat.slug === slug)[0].subcategories
        .sort((a, b) => a.name.localeCompare(b.name));
  }

  onSubmitAddProduct() {
    if (this.productForm.invalid) {
      return;
    }
  }

  onImagePicked(imageData: string) {

  }
}
