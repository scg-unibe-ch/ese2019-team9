import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {MapModalComponent} from '../map-modal/map-modal.component';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-map-picker',
  templateUrl: './map-picker.component.html',
  styleUrls: ['./map-picker.component.scss'],
})
export class MapPickerComponent implements OnInit {

  constructor(private modalCtrl: ModalController, private http: HttpClient) { }

  ngOnInit() {}

  onPickLocation() {
    console.log('help4');
    this.modalCtrl.create({component: MapModalComponent}).then(modalEl => {
      modalEl.onDidDismiss().then(modalData => {
        if (!modalData.data) {
          return;
        }
        this.getAddress(modalData.data.lat, modalData.data.lng).subscribe((address) => {
          console.log(address);
        });
      });
      modalEl.present();
    });
  }

  private getAddress(lat: number, lng: number) {
    console.log('help3');
    return this.http.get<any>(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${environment.googleMapsAPIKey}`
    ).pipe(map(geoData => {
      if (!geoData || !geoData.results || geoData.results.length === 0) {
        return null;
      }
      return geoData.results[0].formatted_address;
      console.log(geoData);
    }));
  }
}
