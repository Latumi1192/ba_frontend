import { Brand } from "../dto/BrandDTO";
import { Car } from "../dto/CarDTO";
import { BrandService } from "./BrandService";

export class BrandServiceImpl implements BrandService {
  getAllBrand(): Promise<Brand[]> {
    throw new Error("Method not implemented.");
  }
  getAllCarFromBrand(brandname: String): Promise<Car[]> {
    throw new Error("Method not implemented.");
  }
  deleteBrand(brandname: String): boolean {
    throw new Error("Method not implemented.");
  }
  addCarIntoBrand(car: Car): boolean {
    throw new Error("Method not implemented.");
  }
  editCar(placeholder: String): boolean {
    throw new Error("Method not implemented.");
  }
}
