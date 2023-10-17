import { Car } from "../dto/CarDTO";
import { Brand } from "../dto/BrandDTO";

export interface BrandService {
  getAllBrand(): Promise<String[]>;
  getAllCarFromBrand(brandname: String): Array<Car>;
  deleteBrand(brandname: String): void;
  //placeholder
  editCar(placeholder: String): boolean;
}
