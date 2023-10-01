import { Car } from "../dto/CarDTO";
import { Brand } from "../dto/BrandDTO";

export interface BrandService {
  getAllBrand(): Promise<Array<Brand>>;
  getAllCarFromBrand(brandname: String): Promise<Array<Car>>;
  deleteBrand(brandname: String): boolean;
  addCarIntoBrand(car: Car): boolean;
  //placeholder
  editCar(placeholder: String): boolean;
}
