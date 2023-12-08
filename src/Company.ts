import { faker } from '@faker-js/faker';
import { Mappable } from './Map';

export default class Company implements Mappable {
  name: string;
  catchPhrase: string;
  location: {
    lng: number;
    lat: number;
  };

  constructor() {
    this.name = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }

  report(): void {
    console.log('hi');
  }
}
