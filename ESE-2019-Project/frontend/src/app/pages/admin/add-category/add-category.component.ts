import {Component, OnInit, ViewChild} from '@angular/core';
import {CategoryService} from 'src/app/core/services/categoryService/category.service';
import {Category} from 'src/app/models/category';
import {FormGroupName, FormGroup, FormBuilder, Validators, FormControl, AbstractControl} from '@angular/forms';
import {UniqueValidator} from './uniqueValidator'
import {ProgressIndicatorService} from 'src/app/core/services/progressIndicatorService/progress-indicator.service';
import {AlertController} from '@ionic/angular';
import {ImagePickerComponent} from "../../../shared/components/image-picker/image-picker.component";

@Component({
    selector: 'app-add-category',
    templateUrl: './add-category.component.html',
    styleUrls: ['./add-category.component.scss'],
})
export class AddCategoryComponent implements OnInit {
    @ViewChild(ImagePickerComponent, {static: false}) imagePicker: ImagePickerComponent;
    currentCategories: Category[] = [];
    categoryForm: FormGroup;
    imageFile;
    updateNotCreate: boolean = false;
    selectedCategory: Category;

    slugAsyncTexts = {pendingText: 'Checking if slug is unique', validText: 'Slug is available'};

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
    }

    constructor(
        private categoryService: CategoryService,
        private formBuilder: FormBuilder,
        private progressIndicatorService: ProgressIndicatorService,
        private alertController: AlertController) {
    }

    ngOnInit() {
        this.categoryService.getCategories().subscribe(
            data => {
                this.currentCategories = data;
                if (!this.updateNotCreate) this.setUniqueValidator();
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

    editCategory(category: Category, parentCategory?: Category) {
        this.changeMode('update');
        const hasParentCategory = Boolean(parentCategory);
        this.categoryForm.controls['subcategoryToggle'].setValue(hasParentCategory);
        if (hasParentCategory) this.categoryForm.controls['parentSlug'].setValue(parentCategory.slug)
        this.selectedCategory = category;
        this.categoryForm.controls['name'].setValue(category.name);
        this.categoryForm.controls['slug'].setValue(category.slug);
        this.categoryForm.markAsUntouched();
        this.categoryForm.markAsPristine();
        document.querySelector('#form').scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }

    createNewSubcategoryOn(category) {
        this.changeMode('create');
        this.categoryForm.controls['subcategoryToggle'].setValue(true);
        this.categoryForm.controls['parentSlug'].setValue(category.slug);
        document.querySelector('#form').scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }

    onCategoryNameChange(event: any) {
        let name = event.target.value;
        name = name.toLowerCase();
        name = name.replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/[^a-z]/g, '');
        this.categoryForm.controls['slug'].setValue(name);
        this.categoryForm.controls['slug'].updateValueAndValidity();
        this.categoryForm.controls['slug'].markAsDirty();
    }

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
                //this.imagePicker.resetImage();
            }, reason => {
                this.progressIndicatorService.dismissLoadingIndicator();
                this.progressIndicatorService.presentToast('Category not updated', 'danger');
                console.log(reason);
            }).then(() => {
            this.categoryService.getCategories().subscribe(
                data => {
                    this.currentCategories = data;
                    if (!this.updateNotCreate) this.setUniqueValidator();
                },
                err => {
                    console.log(err);
                }
            );
        });
    }

    setUniqueValidator() {
        this.categoryForm.controls['slug'].setAsyncValidators(UniqueValidator(this.currentCategories, 'slug'));
        this.categoryForm.controls['slug'].updateValueAndValidity();
    }

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

    changeMode(mode: string) {
        this.categoryForm.reset();
        this.updateNotCreate = mode === 'update';
        if (this.updateNotCreate) {
            this.categoryForm.controls['slug'].clearAsyncValidators();
            this.slugAsyncTexts = undefined;
        } else {
            this.setUniqueValidator();
            this.slugAsyncTexts = {pendingText: 'Checking if slug is unique', validText: 'Slug is available'};
        }
    }

    updateCategory(form: FormGroup): Promise<any> {
        return new Promise((resolve, reject) => {
            let body = `{`;
            let controlKeys = Object.keys(form.controls);
            let firstLine = true;
            controlKeys.forEach((key) => {
                if (form.controls[key].dirty) {
                    body += `${(firstLine) ? '' : ','}"${key}":"${form.controls[key].value}"`;
                    firstLine = false;
                }
            });
            if (form.controls['subcategoryToggle'].dirty && !form.controls['subcategoryToggle'].value) {
                body += `${(firstLine) ? '' : ','}"parentId":null`;
            }
            body += `}`;
            if (firstLine) {
                this.progressIndicatorService.presentToast('Nothing has been changed', "warning");
                return;
            }
            ;
            this.categoryService.updateCategory((this.selectedCategory as any)._id, body, this.imageFile).subscribe((data) => {
                resolve(data);
            }, (err) => {
                reject(err);
            });
        });
    }

    createCategory(values: FormGroup["value"]) {
        return new Promise((resolve, reject) => {
            if (!this.imageFile) reject('Specify an image');
            const category = new Category(values.name, values.slug, '')
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
                            if (!this.updateNotCreate) this.setUniqueValidator();
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
                            resolve(true)
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


