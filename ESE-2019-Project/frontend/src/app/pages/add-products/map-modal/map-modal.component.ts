import {Component, OnInit, AfterViewInit, ViewChild, ElementRef, Renderer2, OnDestroy, Input} from '@angular/core';
import {ModalController} from '@ionic/angular';
import { environment } from '../../../../environments/environment';

/**
 * Displays the map from Google Maps
 */
@Component({
    selector: 'app-map-modal',
    templateUrl: './map-modal.component.html',
    styleUrls: ['./map-modal.component.scss'],
})
export class MapModalComponent implements AfterViewInit, OnDestroy {
    /**
     * The map Element
     */
    @ViewChild('map', {static: false}) mapElementRef: ElementRef;
    /**
     * The click-event-listener
     */
    clickListener: any;

    /**
     * @ignore
     */
    googleMaps: any;

    /**
     * Assigns two new private variables
     * @param modalCtrl Auto injected ModalController to dismiss the modal
     * @param renderer Auto injected Renderer to have a custom rendering
     */
    constructor(private modalCtrl: ModalController,
                private renderer: Renderer2) {
    }

    /**
     * Dismisses the Modal
     */
    onCancel() {
        this.modalCtrl.dismiss();
    }

    /**
     * Fetches the Google Maps Script and renders the map. Assigns a new click listener on the map.
     */
    ngAfterViewInit() {
        this.getGoogleMaps().then(googleMaps => {
            this.googleMaps = googleMaps;
            const mapEl = this.mapElementRef.nativeElement;
            const map = new googleMaps.Map(mapEl, {
                center: {lat: 46.9505, lng: 7.4381 },
                zoom: 16
            });
            this.googleMaps.event.addListenerOnce(map, 'idle', () => {
                this.renderer.addClass(mapEl, 'visible');
            });
            this.clickListener = map.addListener('click', event => {
              const selectedCoords = {lat: event.latLng.lat(), lng: event.latLng.lng()};
              this.modalCtrl.dismiss(selectedCoords);
            });
        }).catch(err => {
            console.log(err);
        });
    }

    /**
     * Removes the click-event-listener when the component gets destroyed
     */
    ngOnDestroy() {
        this.googleMaps.event.removeListener(this.clickListener);
    }

    /**
     * Tries to fetch the Google Maps Script.
     * @returns Promise with the maps field of the google module or rejects if the SDK is not available
     */
    private getGoogleMaps(): Promise<any> {
        const win = window as any;
        const googleModule = win.google;
        if (googleModule && googleModule.maps) {
            return Promise.resolve(googleModule.maps);
        }
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = 'https://maps.googleapis.com/maps/api/js?key=' + environment.googleMapsAPIKey;
            script.async = true;
            script.defer = true;
            document.body.appendChild(script);
            script.onload = () => {
                const loadedGoogleModule = win.google;
                if (loadedGoogleModule && loadedGoogleModule.maps) {
                    resolve(loadedGoogleModule.maps);
                } else {
                    reject('Google maps SDK not available');
                }
            };
        });
    }
}
