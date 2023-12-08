import { faker } from '@faker-js/faker';
import { Mappable } from './Map';

export default class User implements Mappable {
  name: string;
  location: {
    lng: number;
    lat: number;
  };

  constructor() {
    this.name = faker.person.firstName();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }

  report(): void {
    console.log('hello');
  }
}
