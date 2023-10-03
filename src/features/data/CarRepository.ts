import { Car } from "../domain/dto/CarDTO";

export interface CarRepository {
  getCarID(carname: String): number;
  deleteCarByID(ID: number): boolean;
  getCarByID(ID: number): Promise<Car>;
  //placeholder
  editCarByID(ID: number, placeholder: String): boolean;
}
