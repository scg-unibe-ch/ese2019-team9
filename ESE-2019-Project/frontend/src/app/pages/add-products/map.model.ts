export interface Coordinates {
    lat: number;
    lng: number;
}

export interface PlaceMap extends Coordinates {
    address: string;
    staticMapImageUrl: string;
}
