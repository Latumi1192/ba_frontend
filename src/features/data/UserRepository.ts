import { CarData } from '../domain/dto/CarData';

export interface UserRepository {
  creatCarData(guestData: CarData): Promise<boolean>;
  getCar(): Promise<CarData[]>;
}