import { Brand } from "../domain/dto/BrandDTO";
import { Car } from "../domain/dto/CarDTO";
import { BrandRepository } from "./BrandRepository";

export class BrandRepositoryImpl implements BrandRepository{
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