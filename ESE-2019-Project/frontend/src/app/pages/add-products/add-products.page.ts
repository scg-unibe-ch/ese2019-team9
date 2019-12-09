import {Component, OnInit, ViewChild} from '@angular/core';
import {CategoryService} from '../../core/services/categoryService/category.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../core/services/productService/product.service';
import {ProgressIndicatorService} from '../../core/services/progressIndicatorService/progress-indicator.service';
import {PlaceMap} from './map.model';
import { UserService } from 'src/app/core/services/userService/user.service';
import { Router } from '@angular/router';
import {ImagePickerComponent} from '../../shared/components/image-picker/image-picker.component';
import {MapPickerComponent} from './map-picker/map-picker.component';

/**
 * Transforms base64 Data to a Blob (file-like data)
 * @param base64Data the data to transform
 * @param contentType the type of the content
 */
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
    return new Blob(byteArrays, {type: contentType});
}

/**
 * The page for adding new products
 */
@Component({
    selector: 'app-add-products',
    templateUrl: './add-products.page.html',
    styleUrls: ['./add-products.page.scss'],
})
export class AddProductsPage implements OnInit {
    /**
     * The Image Picker Component on the page
     */
    @ViewChild(ImagePickerComponent, {static: false}) imagePicker: ImagePickerComponent;

    /**
     * The Map Picker Component on the page
     */
    @ViewChild(MapPickerComponent, {static: false}) mapPicker: MapPickerComponent;

    /**
     * The input form as a FormGroup
     */
    productForm: FormGroup;

    /**
     * The selected imageFile
     */
    imageFile;

    /**
     * The validation messages to display if a field of the form is invalid
     */
    validationMessages = {
        name: [
            {type: 'required', message: 'Title is required'},
            {type: 'text', message: 'Not a valid address'},
            {type: 'minlength', message: 'Title must be longer than 5 characters'},
            {type: 'maxlength', message: 'Title must be less than 30 characters'}
        ],
        price: [
            {type: 'required', message: 'Price is required'},
            {type: 'number', message: 'Not a valid number'},
            {type: 'min', message: 'Price must be more than 10 CHF'},
            {type: 'max', message: 'Price must be lower than 1\'000\'000 CHF'}
        ],
        description: [
            {type: 'required', message: 'Description is required'},
            {type: 'maxlength', message: 'Description must me shorter than 10000 characters'}
        ],
        location: [
            {type: 'required', message: 'Location is required'},
            {type: 'text', message: 'Not a valid location'},
            {type: 'maxlength', message: 'Location must be less than 30 characters'}
        ]
    };

    /**
     * An array with all categories
     */
    categories: any = [];

    /**
     * An array with all the subcategories of the chosen category
     */
    chosenSubcategories = [];

    /**
     * Assigns new private variables
     * @param categoryService Auto injected CategoryService to fetch all categories
     * @param productService Auto injected ProductService to create the product
     * @param progressIndicatorService Auto injected ProgressIndicatorService to display toasts
     * @param formBuilder Auto injected FormBuilder
     * @param userService Auto injected UserService to check whether the user is eligible to create a product
     * @param router Auto injected Router to redirect users
     */
    constructor(
        private categoryService: CategoryService,
        private productService: ProductService,
        private progressIndicatorService: ProgressIndicatorService,
        private formBuilder: FormBuilder,
        private userService: UserService,
        private router: Router
    ) {}

    /**
     * Checks whether the currently logged in user is a seller. If not redirects him to the profile page
     */
    ionViewWillEnter() {
        const promise = this.userService.isSeller();
        promise.then((isSeller) => {
            if (!isSeller) {
                // tslint:disable-next-line: max-line-length
                this.progressIndicatorService.presentToast('You\'re missing profile information to add products', 'danger', 'other', true, 'middle')
                .then(() => this.router.navigate(['/profile']));
            }
        });
    }

    /**
     * Fetches all categories from the backend and groups all FormControls into the FormGroup
     */
    ngOnInit() {
        this.categoryService.getCategories().subscribe(data => {
            this.categories = data;
        });
        this.productForm = this.formBuilder.group({
            name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
            price: ['', [Validators.required, Validators.min(10), Validators.max(1000000)]],
            location: ['', [Validators.required, Validators.maxLength(256)]],
            category: ['', [Validators.required]],
            categorySlug: ['', [Validators.required]],
            description: ['', [Validators.required, Validators.maxLength(10000)]],
            map: ['', [Validators.required]]
        });
    }

    /**
     * Filters the subcategories, so that only the subcategories of the chosen category are shown
     * @param event the change event of the ion-select
     */
    displayChosenSubcategories(event) {
        const slug = event.target.value;
        if (!this.categories.filter(cat => cat.slug === slug)[0]) {
            return;
        }
        this.chosenSubcategories = this.categories.filter(cat => cat.slug === slug)[0].subcategories
            .sort((a, b) => a.name.localeCompare(b.name));
    }

    /**
     * Validates the form and adds the product if the form is valid.
     * Then resets the form.
     */
    onSubmitAddProduct() {
        if (this.productForm.invalid) {
            this.progressIndicatorService.presentToast('Form incomplete: Please enter all required information', 'danger');
            return;
        }
        const val = this.productForm.value;
        this.progressIndicatorService.presentLoading('Adding product...');
        this.productService.addProduct(val, this.imageFile).subscribe(data => {
            this.progressIndicatorService.dismissLoadingIndicator();
            this.productForm.reset();
            // tslint:disable-next-line: max-line-length
            this.progressIndicatorService.presentToast('Product successfully created. We will publish it online within 24 hours or contact you if changes are necessary.', 'warning', 10000);
            this.imagePicker.resetImage();
            this.mapPicker.resetLocation();
        }, error => {
            this.progressIndicatorService.dismissLoadingIndicator();
            console.log(error);
        });
    }

    /**
     * Called when a new image is selected with the ImagePicker. Transforms the image and assingsd it to the {@link #imageFile} variable
     * @param imageData the new image
     */
    onImagePicked(imageData: string | File) {
        if (typeof imageData === 'string') {
            try {
                this.imageFile = base64toBlob(imageData.replace('data:image/jpeg;base64,', ''), 'image/jpeg');
            } catch (error) {
                console.log(error);
                return;
            }
        } else {
            this.imageFile = imageData;
        }
    }

    /**
     * Called when a new location is selected with the MapPciker. Sets the selected address as an input on the address input field.
     * @param location the new Location
     */
    onLocationPicked(location: PlaceMap) {
        this.productForm.patchValue({map: location});
        (document.getElementById('locationInput').firstElementChild.children[1] as any).value = location.address;
    }
}
