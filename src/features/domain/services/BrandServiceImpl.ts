import { Brand } from "../dto/BrandDTO";
import { Car } from "../dto/CarDTO";
import { BrandService } from "./BrandService";
import { BrandRepositoryImpl } from "@/features/data/BrandRepositoryImpl";

export class BrandServiceImpl implements BrandService {
  BrandRepo = new BrandRepositoryImpl();
  getAllBrand(): String[] {
    return this.BrandRepo.getAllBrand();
  }
  getAllCarFromBrand(brandname: String): Car[] {
    return this.BrandRepo.getAllCarFromBrand(brandname);
  }
  deleteBrand(brandname: String): void {
    this.BrandRepo.deleteBrand(brandname);
  }
  editCar(placeholder: String): boolean {
    throw new Error("Method not implemented.");
  }
}
