import { Car } from "../dto/CarDTO";

export interface CarService {
  getCarID(carname: String): number;
  deleteCarByID(ID: number): boolean;
  getCarByID(ID: number): Promise<Car>;
  //placeholder
  editCarByID(ID: number, placeholder: String): boolean;
}
