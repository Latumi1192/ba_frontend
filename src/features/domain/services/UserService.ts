import { CarData } from '../dto/CarData';

export interface UserService {
  creatCarData(carData: CarData): Promise<boolean>;
  getCar(): Promise<CarData[]>;
}