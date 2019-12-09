/**
 * Coordinates Interface for better type oriented programming
 */
export interface Coordinates {
    /**
     * the latitude as a number
     */
    lat: number;
    /**
     * the longitude as a number
     */
    lng: number;
}

/**
 * PlaceMap Interface for better type oriented programming
 */
export interface PlaceMap extends Coordinates {
    /**
     * the adress of a location
     */
    address: string;
    /**
     * the image url of the static map of the location
     */
    staticMapImageUrl: string;
}
