import { Car } from "../domain/dto/CarDTO";
import { Brand } from "../domain/dto/BrandDTO";

export interface BrandRepository {
  getAllBrand(): Promise<String[]>;
  getAllCarFromBrand(brandname: String): Array<Car>;
  deleteBrand(brandname: String): void;
  //placeholder
  editCar(placeholder: String): boolean;
}
