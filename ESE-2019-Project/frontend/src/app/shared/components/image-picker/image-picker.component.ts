import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Input,
  Output,
  ViewChild
} from '@angular/core';
import {Plugins, Capacitor, CameraResultType, CameraSource} from '@capacitor/core';
import {Platform} from '@ionic/angular';

/**
 * The Component handling the picking of the image from the users disk or the camera
 */
@Component({
  selector: 'app-image-picker',
  templateUrl: './image-picker.component.html',
  styleUrls: ['./image-picker.component.scss'],
})
export class ImagePickerComponent implements OnInit {
  /**
   * the filePicker Element on the page
   */
  @ViewChild('filePicker', {static: false}) filePickerRef: ElementRef<HTMLInputElement>;
  /**
   * An event that is emitted if a new image is picked
   */
  @Output() imagePick = new EventEmitter<string | File>();
  /**
   * The image that should be selected by default or undefined
   */
  @Input() preSelectedImage?: string;
  /**
   * A variable to indicate if the image pciker is for the profile
   */
  @Input() profilePicker?: boolean;

  /**
   * Whether the image picker should be displayed in "avatar mode"
   */
  @Input() avatar?: boolean;
  /**
   * The currently selected image
   */
  selectedImage: string;
  /**
   * A variable to indicate whether the picker has to be used
   */
  usePicker = false;

  /**
   * Assings a new private variable `platform`
   * @param platform Auto injected Platform to check what platform the website is run
   */
  constructor(private platform: Platform) { }

  /**
   * Inputs the default preSelectedImage and checks tha platform to decide whether the picker has to be used
   */
  ngOnInit() {
    this.selectedImage = this.preSelectedImage;
    if (this.platform.is('mobile') && !this.platform.is('hybrid') || this.platform.is('desktop')) {
      this.usePicker = true;
    }
  }

  /**
   * Picks a new Image from the filePicker or the camera
   */
  onPickImage() {
      if (!Capacitor.isPluginAvailable('Camera') || this.usePicker) {
      this.filePickerRef.nativeElement.click();
      return;
    }
      Plugins.Camera.getPhoto({
      quality: 50,
      source: CameraSource.Prompt,
      correctOrientation: true,
      height: 200,
      resultType: CameraResultType.Base64
    }).then(image => {
        this.selectedImage = image.base64String;
        this.imagePick.emit(image.base64String);
    }).catch(error => {
      console.log(error);
      return false;
    });
  }

  /**
   * Called when a File is chosen
   * @param event the event given by the FilePicker
   */
  onFileChosen(event: Event) {
    const pickedFile = (event.target as HTMLInputElement).files[0];
    if (!pickedFile) {
      return;
    }
    const fr = new FileReader();
    fr.onload = () => {
      const dataUrl = fr.result.toString();
      this.selectedImage = dataUrl;
      this.imagePick.emit(pickedFile);
    };
    fr.readAsDataURL(pickedFile);
  }

  /**
   * Resets the selected Image
   */
  resetImage() {
    this.selectedImage = undefined;
  }
}


