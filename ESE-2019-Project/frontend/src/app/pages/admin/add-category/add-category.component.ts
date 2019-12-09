import {Component, OnInit, ViewChild} from '@angular/core';
import {CategoryService} from 'src/app/core/services/categoryService/category.service';
import {Category} from 'src/app/models/category';
import {FormGroupName, FormGroup, FormBuilder, Validators, FormControl, AbstractControl} from '@angular/forms';
import {UniqueValidator} from './uniqueValidator';
import {ProgressIndicatorService} from 'src/app/core/services/progressIndicatorService/progress-indicator.service';
import {AlertController} from '@ionic/angular';
import {ImagePickerComponent} from '../../../shared/components/image-picker/image-picker.component';

/**
 * A component to add, delete and edit categories.
 */
@Component({
    selector: 'app-add-category',
    templateUrl: './add-category.component.html',
    styleUrls: ['./add-category.component.scss'],
})
export class AddCategoryComponent implements OnInit {
    /**
     * The Image Pciker Component on the page
     */
    @ViewChild(ImagePickerComponent, {static: false}) imagePicker: ImagePickerComponent;
    /**
     * All of the current categories as a Category Array
     */
    currentCategories: Category[] = [];
    /**
     * The form as a FormGroup
     */
    categoryForm: FormGroup;
    /**
     * The selected image File for the category
     */
    imageFile;
    /**
     * A boolean to indicate whether a category should be created or updated
     */
    updateNotCreate = false;
    /**
     * A variable to store the selected Category
     */
    selectedCategory: Category;

    /**
     * The Texts that are displayed in the checking process of the validility and availability of the slug
     */
    slugAsyncTexts = {pendingText: 'Checking if slug is unique', validText: 'Slug is available'};

    /**
     * The texts to dsiplay if the form is invalid
     */
    validationMessages = {
        name: [
            {type: 'required', message: 'Name is required'},
            {type: 'text', message: 'Not a valid Name'},
            {type: 'minlength', message: 'Name must be longer than 5 characters'},
            {type: 'maxlength', message: 'Name must be less than 30 characters'}
        ],
        slug: [
            {type: 'required', message: 'Slug is required'},
            {type: 'text', message: 'Not a valid Slug'},
            {type: 'minlength', message: 'Slug must be longer than 5 characters'},
            {type: 'maxlength', message: 'Slug must be less than 30 characters'},
            {type: 'pattern', message: 'Slug can only contain lowercase, alphabetic characters'},
            {type: 'unique', message: 'A (Sub)Category with this slug already exists'}
        ]
    };

    /**
     * Assigns new private variable
     * @param categoryService Auto injceted CategoryService to fetch all categories and handle the updating and creation of categories
     * @param formBuilder Auto injceted FormBuilder used to group the form
     * @param progressIndicatorService Auto injceted ProgressIndicatorService to display toasts and loading indicators
     * @param alertController Auto injceted AlertController to display Alerts
     */
    constructor(
        private categoryService: CategoryService,
        private formBuilder: FormBuilder,
        private progressIndicatorService: ProgressIndicatorService,
        private alertController: AlertController) {
    }

    /**
     * Fetches all categories and groups the form
     */
    ngOnInit() {
        this.categoryService.getCategories().subscribe(
            data => {
                this.currentCategories = data;
                if (!this.updateNotCreate) { this.setUniqueValidator(); }
            },
            err => {
                console.log(err);
            }
        );
        this.categoryForm = this.formBuilder.group({
            subcategoryToggle: [],
            parentSlug: [],
            name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
            slug: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(30), Validators.pattern(/^[a-z]+$/)]]
        });
    }

    /**
     * Changes the form so that a category is being updated, not a new one created
     * @param category the category which should be edited
     * @param parentCategory the parent category of the category to be edited
     */
    editCategory(category: Category, parentCategory?: Category) {
        this.changeMode('update');
        const hasParentCategory = Boolean(parentCategory);
        this.categoryForm.controls.subcategoryToggle.setValue(hasParentCategory);
        if (hasParentCategory) { this.categoryForm.controls['parentSlug'].setValue(parentCategory.slug) }
        this.selectedCategory = category;
        this.categoryForm.controls.name.setValue(category.name);
        this.categoryForm.controls.slug.setValue(category.slug);
        this.categoryForm.markAsUntouched();
        this.categoryForm.markAsPristine();
        document.querySelector('#form').scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
    }

    /**
     * Changes the form so that a new category is being created
     * @param category the parent category on which the new subcategory should be created on
     */
    createNewSubcategoryOn(category) {
        this.changeMode('create');
        this.categoryForm.controls.subcategoryToggle.setValue(true);
        this.categoryForm.controls.parentSlug.setValue(category.slug);
        document.querySelector('#form').scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
    }

    /**
     * Edits the slug if the name of a category has been edited
     * @param event the change event of the name-input-field
     */
    onCategoryNameChange(event: any) {
        let name = event.target.value;
        name = name.toLowerCase();
        name = name.replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/[^a-z]/g, '');
        this.categoryForm.controls.slug.setValue(name);
        this.categoryForm.controls.slug.updateValueAndValidity();
        this.categoryForm.controls.slug.markAsDirty();
    }

    /**
     * Checks whether the form is valid and if it is valid, tries to update/create the category.
     */
    onSubmitForm() {
        let promise;
        this.progressIndicatorService.presentLoading(`${this.updateNotCreate ? 'Updating ' : 'Creating '} the category`);
        if (this.updateNotCreate) {
            promise = this.updateCategory(this.categoryForm);
        } else {
            promise = this.createCategory(this.categoryForm.value);
        }
        promise.then(
            (data) => {
                this.progressIndicatorService.dismissLoadingIndicator();
                this.progressIndicatorService.presentToast('Category updated');
                this.categoryForm.reset();
                this.imagePicker.resetImage();
            }, reason => {
                this.progressIndicatorService.dismissLoadingIndicator();
                this.progressIndicatorService.presentToast('Category not updated', 'danger');
                console.log(reason);
            }).then(() => {
            this.categoryService.getCategories().subscribe(
                data => {
                    this.currentCategories = data;
                    if (!this.updateNotCreate) { this.setUniqueValidator(); }
                },
                err => {
                    console.log(err);
                }
            );
        });
    }

    /**
     * Sets the UniqueValidators for the slug if a new category should be created
     */
    setUniqueValidator() {
        this.categoryForm.controls.slug.setAsyncValidators(UniqueValidator(this.currentCategories, 'slug'));
        this.categoryForm.controls.slug.updateValueAndValidity();
    }

    /**
     * Triggered when a new image is picked. Transforms the image
     * @param imageData the data of the image
     */
    onImagePicked(imageData: string | File) {
        if (typeof imageData === 'string') {
            try {
                this.imageFile = this.base64toBlob(imageData.replace('data:image/jpeg;base64,', ''), 'image/jpeg');
            } catch (error) {
                console.log(error);
                return;
            }
        } else {
            this.imageFile = imageData;
        }
    }

    /**
     * Transforms base64 Data to a Blob (file-like data)
     * @param base64Data the data to transform
     * @param contentType the type of the content
     */
    base64toBlob(base64Data, contentType) {
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
     * Changes the mode and updates the form to match the required inputs and validators for the given mode
     * @param mode the mode which is 'update' or 'create'
     */
    changeMode(mode: string) {
        this.categoryForm.reset();
        this.updateNotCreate = mode === 'update';
        if (this.updateNotCreate) {
            this.categoryForm.controls.slug.clearAsyncValidators();
            this.slugAsyncTexts = undefined;
        } else {
            this.setUniqueValidator();
            this.slugAsyncTexts = {pendingText: 'Checking if slug is unique', validText: 'Slug is available'};
        }
    }

    /**
     * Updates the category with all the new information
     * @param form the FormGroup of all inputs
     */
    updateCategory(form: FormGroup): Promise<any> {
        return new Promise((resolve, reject) => {
            let body = `{`;
            const controlKeys = Object.keys(form.controls);
            let firstLine = true;
            controlKeys.forEach((key) => {
                if (form.controls[key].dirty) {
                    body += `${(firstLine) ? '' : ','}"${key}":"${form.controls[key].value}"`;
                    firstLine = false;
                }
            });
            if (form.controls.subcategoryToggle.dirty && !form.controls.subcategoryToggle.value) {
                body += `${(firstLine) ? '' : ','}"parentId":null`;
            }
            body += `}`;
            if (firstLine) {
                this.progressIndicatorService.presentToast('Nothing has been changed', 'warning');
                return;
            }
            
            this.categoryService.updateCategory((this.selectedCategory as any)._id, body, this.imageFile).subscribe((data) => {
                resolve(data);
            }, (err) => {
                reject(err);
            });
        });
    }

    /**
     * Creates a new Category
     * @param values the values of the the FormGroup
     */
    createCategory(values: FormGroup['value']) {
        return new Promise((resolve, reject) => {
            if (!this.imageFile) { reject('Specify an image'); }
            const category = new Category(values.name, values.slug, '');
            if (values.subcategoryToggle) {
                category.parentSlug = values.parentSlug;
            }
            this.categoryService.addCategory(category, this.imageFile).subscribe((data) => {
                resolve(data);
            }, (err) => {
                reject(err);
            });
        });
    }

    /**
     * Deletes a category
     * @param category the category which should be deleted
     */
    onDeleteCategory(category: Category) {
        const promise = this.presentAlertConfirm(category);
        promise.then((shouldDelete) => {
            if (!shouldDelete) {
                return;
            }
            this.progressIndicatorService.presentLoading('Deleting Category');
            this.categoryService.deleteCategory((category as any)._id).subscribe(
                (data) => {
                    this.progressIndicatorService.dismissLoadingIndicator();
                    this.progressIndicatorService.presentToast('Sucessfully deleted Category', 'success');
                    this.categoryService.getCategories().subscribe(
                        data => {
                            this.currentCategories = data;
                            if (!this.updateNotCreate) { this.setUniqueValidator(); }
                        },
                        err => {
                            console.log(err);
                        }
                    );
                }, (error) => {
                    this.progressIndicatorService.dismissLoadingIndicator();
                    this.progressIndicatorService.presentToast('Could not delete Category', 'danger');
                    console.log(error);
                }
            );
        });
    }

    /**
     * Ask for confirmation if the category should be deleted
     * @param category  the category to be deleted
     * @returns a new Promis that resolves whit the boolean whether the category should be deleted
     */
    async presentAlertConfirm(category) {
        return new Promise(async (resolve, reject) => {
            const alert = await this.alertController.create({
                header: 'Confirm!',
                message: `Are you sure you want to delete the category <strong>${category.name}</strong>`,
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'cancel-button',
                        handler: () => {
                            resolve(false);
                        }
                    }, {
                        text: 'Delete',
                        cssClass: 'delete-button',
                        handler: () => {
                            resolve(true);
                        }
                    }
                ]
            });
            alert.onWillDismiss().then(() => {
                resolve(false);
            });
            await alert.present();
        });
    }
}


