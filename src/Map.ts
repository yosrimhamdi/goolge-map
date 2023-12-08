export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  report(): void;
}

export default class Map {
  private map: google.maps.Map;

  constructor(element: Element) {
    this.map = new google.maps.Map(element, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(mappable: Mappable): void {
    new google.maps.Marker({ map: this.map, position: mappable.location });

    mappable.report();
  }
}
