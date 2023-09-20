import { UserService } from "./UserService";
import { CarData } from "../dto/CarData";
import { UserRepositoryImpl } from "@/features/data/UserRepositoryImpl";

export class UserServiceImpl implements UserService {
    userRepo = new UserRepositoryImpl();

    async creatCarData(carData: CarData): Promise<boolean> {
        return this.userRepo.creatCarData(carData);
    }
    getCar(): Promise<CarData[]> {
        return this.userRepo.getCar();
    }
}