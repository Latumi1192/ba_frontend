import { CarData } from '../domain/dto/CarData';
import { UserRepository } from '../data/UserRepository';

export class UserRepositoryImpl implements UserRepository {
  async creatCarData(guestData: CarData): Promise<boolean> {
    // example with POST Request
    const responsePOST = await fetch('/api/addCar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(guestData),
    });

    console.log(
      'response of example of POST Request',
      await responsePOST.json()
    );
    return true;
  }

  async getCar(): Promise<CarData[]> {
    // example with GET Request
    const responseGET = await fetch('/api/getCar', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return (await responseGET.json()).data;
  }
}