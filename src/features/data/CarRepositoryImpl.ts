import { Car } from "../domain/dto/CarDTO";
import { CarRepository } from "./CarRepository";

export class CarRepositoryImpl implements CarRepository {
  getCarID(carname: String): number {
    throw new Error("Method not implemented.");
  }
  deleteCarByID(ID: number): boolean {
    throw new Error("Method not implemented.");
  }
  getCarByID(ID: number): Promise<Car> {
    throw new Error("Method not implemented.");
  }
  editCarByID(ID: number, placeholder: String): boolean {
    throw new Error("Method not implemented.");
  }
}
