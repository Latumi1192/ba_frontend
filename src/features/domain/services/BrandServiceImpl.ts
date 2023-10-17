import { Brand } from "../dto/BrandDTO";
import { Car } from "../dto/CarDTO";
import { BrandService } from "./BrandService";
import { BrandRepositoryImpl } from "@/features/data/BrandRepositoryImpl";

export class BrandServiceImpl implements BrandService {
  BrandRepo = new BrandRepositoryImpl();
  async getAllBrand(): Promise<String[]> {
    try {
      const data = await this.BrandRepo.getAllBrand();
      return data;
    } catch (error) {
      console.error("An error occurred:", error);
      return [];
    }
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


