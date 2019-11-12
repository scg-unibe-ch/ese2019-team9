import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../core/services/categoryService/category.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

function base64toBlob(base64Data, contentType) {
  contentType = contentType || '';
  const sliceSize = 1024;
  const byteCharacters = atob(base64Data);
  const bytesLength = byteCharacters.length;
  const slicesCount = Math.ceil(bytesLength / sliceSize);
  const byteArrays = new Array(slicesCount);

  for (let sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
    const begin = sliceIndex * sliceSize;
    const end = Math.min(begin + sliceSize, bytesLength);

    const bytes = new Array(end - begin);
    for (let offset = begin, i = 0; offset < end; ++i, ++offset) {
      bytes[i] = byteCharacters[offset].charCodeAt(0);
    }
    byteArrays[sliceIndex] = new Uint8Array(bytes);
  }
  return new Blob(byteArrays, { type: contentType });
}

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

  onImagePicked(imageData: string | File) {
    let imageFile;
    if (typeof imageData === 'string') {
      try {
        imageFile = base64toBlob(imageData.replace('data:image/jpeg;base64,', ''), 'image/jpeg');
      } catch (error) {
        console.log(error);
        return;
      }
    } else {
      imageFile = imageData;
    }
  }
}
