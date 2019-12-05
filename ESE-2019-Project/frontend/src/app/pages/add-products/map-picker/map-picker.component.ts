import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActionSheetController, AlertController, ModalController} from '@ionic/angular';
import {MapModalComponent} from '../map-modal/map-modal.component';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import {map, switchMap} from 'rxjs/operators';
import {PlaceMap, Coordinates} from '../map.model';
import {of} from 'rxjs';
import { Plugins, Capacitor } from '@capacitor/core';


@Component({
  selector: 'app-map-picker',
  templateUrl: './map-picker.component.html',
  styleUrls: ['./map-picker.component.scss'],
})
export class MapPickerComponent implements OnInit {
  @Output() locationPick = new EventEmitter<PlaceMap>();
  selectedLocationImage: string;
  isLoading: boolean;
  constructor(private modalCtrl: ModalController, private http: HttpClient, private actionSheetCtrl: ActionSheetController, private alertCtrl: AlertController) { }

  ngOnInit() {}

  resetLocation() {
    this.selectedLocationImage = undefined;
  }

  onPickLocation() {
    this.actionSheetCtrl.create({
      header: 'Please choose', buttons: [
        {
          text: 'Auto-Locate', icon: 'locate', handler: () => {
            this.locateUser();
          }
        },
        {
          text: 'Pick on map', icon: 'pin', handler: () => {
            this.openMap();
          }
        },
        {text: 'Cancel', role: 'cancel', icon: 'close'}
      ]
    }).then(actionSheetEl => {
      actionSheetEl.present();
    });
  }

    private locateUser() {
      if (!Capacitor.isPluginAvailable('Geolocation')) {
        this.showErrorAlert();
        return;
      }
      this.isLoading = true;
      Plugins.Geolocation.getCurrentPosition().then(geoPosition => {
        const coordinates: Coordinates = {lat: geoPosition.coords.latitude, lng: geoPosition.coords.longitude};
        this.createPlace(coordinates.lat, coordinates.lng);
        this.isLoading = false;
      }).catch(err => {
        this.isLoading = false;
        this.showErrorAlert();
      });
    }

    private showErrorAlert() {
      this.alertCtrl.create({
        header: 'Could not fetch location',
        message: 'Please use map to pick location',
        buttons: ['Okay']
      }).then(alertEl => alertEl.present());
    }

    private openMap() {
      this.modalCtrl.create({component: MapModalComponent}).then(modalEl => {
        modalEl.onDidDismiss().then(modalData => {
          if (!modalData.data) {
            return;
          }
          const coordinates: Coordinates = {
            lat: modalData.data.lat,
            lng: modalData.data.lng,
          };
          this.createPlace(coordinates.lat, coordinates.lng);
        });
        modalEl.present();
      });
  }

  private createPlace(lat: number, lng: number) {
    const pickedLocation: PlaceMap = {
      lat: lat,
      lng: lng,
      address: null,
      staticMapImageUrl: null
    };
    this.isLoading = true;
    this.getAddress(lat, lng).pipe(switchMap(address => {
      pickedLocation.address = address;
      return of(this.getMapImage(pickedLocation.lat, pickedLocation.lng, 14));
    })).subscribe(staticMapImageUrl => {
      pickedLocation.staticMapImageUrl = staticMapImageUrl;
      this.selectedLocationImage = staticMapImageUrl;
      this.isLoading = false;
      this.locationPick.emit(pickedLocation);
    });
  }


  private getAddress(lat: number, lng: number) {
    return this.http.get<any>(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${environment.googleMapsAPIKey}`
    ).pipe(map(geoData => {
      if (!geoData || !geoData.results || geoData.results.length === 0) {
        return null;
      }
      return geoData.results[0].formatted_address;
    }));
  }

  private getMapImage(lat: number, lng: number, zoom: number) {
    return `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=${zoom}
    &size=600x300&maptype=roadmap&markers=color:red%7Clabel:Place%7C${lat},${lng}&key=${environment.googleMapsAPIKey}`;
  }
}