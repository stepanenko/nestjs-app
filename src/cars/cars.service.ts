import { Injectable } from "@nestjs/common";
import { Car } from "./interfaces/car.interface";

@Injectable()
export class CarsService {
  private readonly cars: Car[] = [
    { id: "a1", name: "Audi", year: 2019 },
    { id: "b2", name: "Toyota", year: 2021 },
  ];

  create(car: Car) {
    this.cars.push(car);
  }

  findAll(): Car[] {
    return this.cars;
  }
}
