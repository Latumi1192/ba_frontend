import { Car } from "../domain/dto/CarDTO";
import { Brand } from "../domain/dto/BrandDTO";

export interface BrandRepository {
  getAllBrand(): Promise<Array<Brand>>;
  getAllCarFromBrand(brandname: String): Promise<Array<Car>>;
  deleteBrand(brandname: String): boolean;
  addCarIntoBrand(car: Car): boolean;
  //placeholder
  editCar(placeholder: String): boolean;
}
