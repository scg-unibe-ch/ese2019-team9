import {Component, OnInit, Input, ViewChild, Output, EventEmitter} from '@angular/core';
import {UserService} from 'src/app/core/services/userService/user.service';
import {ProgressIndicatorService} from 'src/app/core/services/progressIndicatorService/progress-indicator.service';
import {ProductService} from '../../../core/services/productService/product.service';
import {ImagePickerComponent} from "../image-picker/image-picker.component";

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
 * A component to display profiles and profile-like data (eg products)
 */
@Component({
    selector: 'app-profile-informations',
    templateUrl: './profile-informations.component.html',
    styleUrls: ['./profile-informations.component.scss'],
})
export class ProfileInformationsComponent implements OnInit {
    /**
     * The grid in which the data is displayed
     */
    @ViewChild('grid', {static: false}) grid;
    /**
     * The Button to update data with
     */
    @ViewChild('updateButton', {static: false}) updateButton;
    /**
     * The ImagePicker Component on the page
     */
    @ViewChild(ImagePickerComponent, {static: false}) imagePicker: ImagePickerComponent;
    /**
     * Delete Event that gets triggered, when the delete button was pressed
     */
    @Output() deleteEvent = new EventEmitter<string>();
    /**
     * Update Event that gets triggered, when the update button was pressed
     */
    @Output() updateEvent = new EventEmitter<string>();
    /**
     * A variable to store the item
     */
    @Input() profileItem;
    /**
     * A variable to get all additional Values that should be displayed but not changeable
     */
    @Input() additionalValues?;
    /**
     * Variable if the components data should be editable
     */
    @Input() changeable: boolean = false;
    /**
     * A variable if the delete button should be hidden
     */
    @Input() hideDelete?: boolean = false;
    /**
     * An array with all fieldnames which should not be displayed
     */
    @Input() valuesToHide: [];
    /**
     * The type of the component. (e.g. 'user' or 'product')
     */
    @Input('type') typeOfProfileItem;
    /**
     * Variable if the data has been changed
     */
    hasChanged = false;
    /**
     * Variable of the column number of the keys as string
     */
    KEYSTRINGS_COLUMN = 0;
    /**
     * Variable of the column number of the values
     */
    VALUES_COLUMN = 1;
    /**
     * Variable of the column number of the edit icon
     */
    EDIT_ICON_COLUMN = 2;
    /**
     * Variable of the column number of the input
     */
    INPUT_COLUMN = 3;
    /**
     * Variable of the column number of the save icon
     */
    SAVE_ICON_COLUMN = 4;
    /**
     * Variable of the column number of the keys
     */
    KEYS_COLUMN = 5;
    
    /**
     * A map to show some keys more beautiful
     */
    keysToName: Map<string, string> = new Map([
        ['_id', 'Id'],
        ['email', 'E-Mail'],
        ['verifiedEmail', 'E-Mail verified'],
        ['country', 'Country*'],
        ['website', 'Website'],
        ['sex', 'Sex'],
        ['name', 'Name*'],
        ['address', 'Address*'],
        ['toRevise', 'Revise'],
        ['productsSold', 'Products sold']
    ]);

    /**
     * A map to show some values more beautiful
     */
    valuesToName: Map<boolean, string> = new Map([
        [true, 'Yes'],
        [false, 'No']
    ]);

    /**
     * An array with all profile item data
     */
    profileItemData = [];
    /**
     * An array with all the additional Information to display
     */
    additionalInformation = [];
    /**
     * The image File of the profile-like data
     */
    imageFile;
    /**
     * The type which has to be given for the component to be a User Type
     */
    typeOfUser = 'user';

    /**
     * The type which has to be given for the component to be a Product Type
     */
    typeOfProduct = 'product';

    /**
     * Assings new private variables
     * @param userService Auto injected UserService to fetch all User Information and handle requests
     * @param productService Auto injected ProductService to fetch all Product Information and handle requests
     * @param progressIndicatorService Auto injected ProgressIndicatorService to display toasts and loading indicators
     */
    constructor(
        private userService: UserService,
        private productService: ProductService,
        private progressIndicatorService: ProgressIndicatorService) {
    }

    /**
     * Filters all the input Data so that all values to hide are hidden. 
     * Adds the data of the additional Values to the additional Information variable
     */
    ngOnInit() {
        // @ts-ignore
        this.profileItemData = Object.keys(this.profileItem).filter(value => this.valuesToHide.indexOf(value) === -1);
        this.profileItemData.sort();
        if (this.additionalValues) {
            this.additionalInformation = Object.keys(this.profileItem).filter(value => this.additionalValues.indexOf(value) !== -1);
            this.additionalInformation.sort();
        }
    }

    /**
     * Gets the string representation of a given key. Looks up in the {@link #keysToName} map and returns the
     * value from there or capitalizes the first Char
     * @param key the key which should be represented as a string
     * @returns the string representation of the key
     */
    getKeyString(key: string): string {
        return (this.keysToName.has(key)) ? this.keysToName.get(key) : key.charAt(0).toUpperCase() + key.slice(1);
    }

    /**
     * Gets the value of a given key. Looks up in the {@link #valuesToName} map and returns the
     * value from there or just the original value
     * @param key the key from which the value is fetched
     * @returns the value
     */
    getValueString(key: string) {
        const value = this.profileItem[key.toString()];
        return (typeof value === 'boolean') ? this.valuesToName.get(value) : value;
    }

    /**
     * Returns the category name
     * @param key the key under which the name is stored
     */
    getCategoryValue(key: string) {
        return this.profileItem[key].name;
    }

    /**
     * Emits the deleteEvent
     */
    onClickDelete() {
        this.deleteEvent.next();
    }

    /**
     * Hides all values and shows inputs instead
     */
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

    /**
     * Triggered when a new image is picked. Transforms the image
     * @param imageData the data of the image
     */
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

    /**
     * Shows the update Button and a border in the 'warning' color as soon as information has been changed
     */
    onChangedInput() {
        if (!this.hasChanged) {
            this.grid.el.classList.add('warning');
            this.updateButton.el.classList.remove('hidden');
        }
        this.hasChanged = true;
    }

    /**
     * Gets all changed rows and makes a backend request to update the values
     */
    onClickSave() {
        const body = this.getAllChangedRows();
        this.progressIndicatorService.presentLoading('Updating...');
        if (this.typeOfProfileItem === this.typeOfUser) {
            this.userService.updateUser(this.profileItem._id, body, this.imageFile).subscribe((data) => {
                this.displaySuccessSignifiers(this.typeOfProfileItem);
                this.updateComponent();
                this.updateEvent.next();
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

    /**
     * Checks for all rows if the value has been changed and if yes, adds it to the body which is then returned
     */
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

    /**
     * Displays success signifiers to show that the information could be updated
     * @param typeOfProfileItem the type of the component
     */
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

    /**
     * Displays failure signifiers to show that the information could not be updated
     * @param typeOfProfileItem the type of the component
     */
    displayFailureSignifiers(typeOfProfileItem: string) {
        this.progressIndicatorService.dismissLoadingIndicator();
        // tslint:disable-next-line: max-line-length
        this.progressIndicatorService.presentToast(typeOfProfileItem.charAt(0).toUpperCase() + typeOfProfileItem.slice(1) + ' could not be updated', 'danger');
        this.grid.el.classList.remove('warning');
        this.grid.el.classList.add('error');
        setTimeout(() => {
            this.grid.el.classList.remove('error');
        }, 1500);
    }

    /**
     * Updates the information of the component and hides the inputs.
     */
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

    /**
     * Fetches the new Information of the profile-like object from the backend
     */
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
