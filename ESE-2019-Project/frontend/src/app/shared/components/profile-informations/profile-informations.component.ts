import {Component, OnInit, Input, ViewChild, Output, EventEmitter} from '@angular/core';
import {UserService} from 'src/app/core/services/userService/user.service';
import {ProgressIndicatorService} from 'src/app/core/services/progressIndicatorService/progress-indicator.service';
import {ProductService} from '../../../core/services/productService/product.service';
import {ImagePickerComponent} from "../image-picker/image-picker.component";

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

@Component({
    selector: 'app-profile-informations',
    templateUrl: './profile-informations.component.html',
    styleUrls: ['./profile-informations.component.scss'],
})
export class ProfileInformationsComponent implements OnInit {
    @ViewChild('grid', {static: false}) grid;
    @ViewChild('updateButton', {static: false}) updateButton;
    @ViewChild(ImagePickerComponent, {static: false}) imagePicker: ImagePickerComponent;
    @Output() deleteEvent = new EventEmitter<string>();
    @Output() updateEvent = new EventEmitter<string>();
    @Input() profileItem;
    @Input() additionalValues?;
    @Input() changeable: boolean = false;
    @Input() hideDelete?: boolean = false;
    @Input() valuesToHide: [];
    @Input('type') typeOfProfileItem;
    hasChanged = false;
    KEYSTRINGS_COLUMN = 0;
    VALUES_COLUMN = 1;
    EDIT_ICON_COLUMN = 2;
    INPUT_COLUMN = 3;
    SAVE_ICON_COLUMN = 4;
    KEYS_COLUMN = 5;
    keysToName: Map<string, string> = new Map([
        ['_id', 'Id'],
        ['email', 'E-Mail address'],
        ['verifiedEmail', 'E-Mail verified'],
        ['country', 'Country*'],
        ['phone', 'Phone number'],
        ['website', 'Website'],
        ['sex', 'Sex'],
        ['name', 'Name*'],
        ['address', 'Address*'],
        ['toRevise', 'Revise']
    ]);

    valuesToName: Map<boolean, string> = new Map([
        [true, 'Yes'],
        [false, 'No']
    ]);

    profileItemData = [];
    additionalInformation = [];
    imageFile;
    typeOfUser = 'user';
    typeOfProduct = 'product';

    constructor(
        private userService: UserService,
        private productService: ProductService,
        private progressIndicatorService: ProgressIndicatorService) {
    }

    ngOnInit() {
        // @ts-ignore
        this.profileItemData = Object.keys(this.profileItem).filter(value => this.valuesToHide.indexOf(value) === -1);
        this.profileItemData.sort();
        if (this.additionalValues) {
            this.additionalInformation = Object.keys(this.profileItem).filter(value => this.additionalValues.indexOf(value) !== -1);
            this.additionalInformation.sort();
        }
    }

    getKeyString(key: string): string {
        return (this.keysToName.has(key)) ? this.keysToName.get(key) : key.charAt(0).toUpperCase() + key.slice(1);
    }

    getValueString(key: string) {
        const value = this.profileItem[key.toString()];
        return (typeof value === 'boolean') ? this.valuesToName.get(value) : value;
    }

    getCategoryValue(key: string) {
        return this.profileItem[key].name;
    }

    onClickDelete() {
        this.deleteEvent.next();
    }

    onClickEdit() {
        this.hasChanged = false;
        const allRows = this.grid.el.children;
        for (let i = 0; i < allRows.length; i++) {
            allRows[i].children[this.VALUES_COLUMN].classList.add('hidden');
            allRows[i].children[this.EDIT_ICON_COLUMN].classList.add('hidden');
            allRows[i].children[this.INPUT_COLUMN].classList.remove('hidden');
            allRows[i].children[this.SAVE_ICON_COLUMN].classList.remove('hidden');
        }
    }

    onImagePicked(imageData: string | File) {
        this.updateButton.el.classList.remove('hidden');
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

    onChangedInput() {
        if (!this.hasChanged) {
            this.grid.el.classList.add('warning');
            this.updateButton.el.classList.remove('hidden');
        }
        this.hasChanged = true;
    }

    onClickSave() {
        const body = this.getAllChangedRows();
        this.progressIndicatorService.presentLoading('Updating...');
        if (this.typeOfProfileItem === this.typeOfUser) {
            this.userService.updateUser(this.profileItem._id, body, this.imageFile).subscribe((data) => {
                this.displaySuccessSignifiers(this.typeOfProfileItem);
                this.updateComponent();
                this.updateEvent.next();
                this.imagePicker.resetImage();
            }, (err) => {
                this.displayFailureSignifiers(this.typeOfProfileItem);
                console.log(err);
            });
        } else if (this.typeOfProfileItem === this.typeOfProduct) {
            this.productService.updateProduct(this.profileItem._id, body, this.imageFile).subscribe(data => {
                this.displaySuccessSignifiers(this.typeOfProfileItem);
                this.updateComponent();
                this.updateEvent.next();
            }, (err) => {
                this.displayFailureSignifiers(this.typeOfProfileItem);
                console.log(err);
            });
        }
    }

    getAllChangedRows(): string {
        const allRows = this.grid.el.children;
        let body = '';
        if (this.typeOfProfileItem === this.typeOfUser) {
            body = `{"userId":"${this.profileItem._id}"`;
        }
        if (this.typeOfProfileItem === this.typeOfProduct) {
            body = `{"productId":"${this.profileItem._id}"`;
        }
        for (let i = 0; i < allRows.length; i++) {
            const columns = allRows[i].children;
            const key = columns[this.KEYS_COLUMN].innerText.trim();
            const oldValue = this.profileItem[key];
            const newValue = columns[this.INPUT_COLUMN].firstElementChild.value.trim();
            if (oldValue !== newValue) {
                body += `,"${key}":"${newValue}"`;
            }
        }
        body += '}';
        return body;
    }

    displaySuccessSignifiers(typeOfProfileItem: string) {
        this.progressIndicatorService.dismissLoadingIndicator();
        this.progressIndicatorService.presentToast(typeOfProfileItem.charAt(0).toUpperCase() + typeOfProfileItem.slice(1) + ' was updated');
        this.grid.el.classList.remove('warning');
        this.grid.el.classList.add('success');
        this.updateButton.el.classList.add('hidden');
        setTimeout(() => {
            this.grid.el.classList.remove('success');
        }, 1500);
    }

    displayFailureSignifiers(typeOfProfileItem: string) {
        this.progressIndicatorService.dismissLoadingIndicator();
        this.progressIndicatorService.presentToast(typeOfProfileItem.charAt(0).toUpperCase() + typeOfProfileItem.slice(1) + ' could not be updated', 'danger');
        this.grid.el.classList.remove('warning');
        this.grid.el.classList.add('error');
        setTimeout(() => {
            this.grid.el.classList.remove('error');
        }, 1500);
    }

    updateComponent() {
        this.retrieveNewProfileInformation();
        const allRows = this.grid.el.children;
        for (let i = 0; i < allRows.length; i++) {
            allRows[i].children[this.VALUES_COLUMN].classList.remove('hidden');
            allRows[i].children[this.EDIT_ICON_COLUMN].classList.remove('hidden');
            allRows[i].children[this.INPUT_COLUMN].classList.add('hidden');
            allRows[i].children[this.SAVE_ICON_COLUMN].classList.add('hidden');
        }
    }

    retrieveNewProfileInformation() {
        if (this.typeOfProfileItem === this.typeOfUser) {
            this.userService.getSingleUser(this.profileItem._id).subscribe(
                (data) => {
                    this.profileItem = data;
                    // @ts-ignore
                    this.profileItemData = Object.keys(this.profileItem).filter(value => this.valuesToHide.indexOf(value) === -1);
                    this.profileItemData.sort();
                },
                (err) => {
                    console.log(err);
                }
            );
        }
        if (this.typeOfProfileItem === this.typeOfProduct) {
            this.productService.getSingleProduct(this.profileItem._id).subscribe(
                (data) => {
                    this.profileItem = data;
                    // @ts-ignore
                    this.profileItemData = Object.keys(this.profileItem).filter(value => this.valuesToHide.indexOf(value) === -1);
                    this.profileItemData.sort();
                },
                (err) => {
                    console.log(err);
                }
            );
        }
    }
}
